import { Component } from 'react';
import { connect } from "react-redux";
import { fetchCars } from '../../action';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import Divider from '@mui/material/Divider';
import store from "../../store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MuiMenuItem from "@material-ui/core/MenuItem";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./styles.css";
import "./img.css";
import { withStyles } from "@material-ui/core/styles";

const MenuItem = withStyles({
    root: {
        justifyContent: "flex-end"
    }
})(MuiMenuItem);

const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize: 16,
            fontWeight: 400,
            fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
            color: "#1773cf",
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 500
        },
        body1: {
            fontSize: 20,
            fontWeight: 400,
            color: "#545b63",
            fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
        },
        body2: {
            fontSize: 12,
            fontWeight: 400,
            color: '#2a343d',
            fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
        }
    },
});

const mapStateToProps = state => {
    return {
        cars: state.carData,
        totalCars: state.metaData.totalElements,
        filterParam: state.filterParam
    };
};

class CarGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: window.carsPerPage,
            sort: ""
        }
    }

    buildUrl(url, currentPage, currentRowsPerPage, sort) {
        var qp = "";
        if (this.props.filterParam.body) {
            qp += "bodyType=" + this.props.filterParam.body + "&";
        }
        if (this.props.filterParam.city) {
            qp += "city=" + this.props.filterParam.city + "&";
        }
        if (this.props.filterParam.color) {
            qp += "listingColor=" + this.props.filterParam.color + "&";
        }
        if (this.props.filterParam.make) {
            qp += "makeName=" + this.props.filterParam.make + "&";
        }
        if (this.props.filterParam.mileage) {
            qp += "mileage=" + this.props.filterParam.mileage + "&";
        }
        if (this.props.filterParam.price_high && this.props.filterParam.price_low) {
            qp += "price=" + this.props.filterParam.price_low + "-"
                + this.props.filterParam.price_high + "&";
        }
        if (this.props.filterParam.seating) {
            qp += "maximumSeating=" + this.props.filterParam.seating + "&";
        }
        if (this.props.filterParam.year_high && this.props.filterParam.year_low) {
            qp += "year=" + this.props.filterParam.year_low + "-"
                + this.props.filterParam.year_high + "&";
        }
        if (this.props.filterParam.transmission_display) {
            qp += "transmissionDisplay=" + this.props.filterParam.transmission_display + "&";
        }
        if (qp.length > 0) {
            qp = qp.substring(0, qp.length - 1);
            url = url + "?" + qp;
            url = url + "&pageSize=" + currentRowsPerPage + "&pageIndex=" + currentPage;
        } else {
            url = url + "?pageSize=" + currentRowsPerPage + "&pageIndex=" + currentPage;
        }
        if (sort) {
            url = url + "&sort=" + sort;
        } else {
            if (store.getState().filterParam && store.getState().filterParam.sort) {
                url = url + "&sort=" + this.props.filterParam.sort;
            }
        }
        return url;
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
        this.state.page = newPage;

        store.dispatch({
            type: "page_index",
            payload: this.state.page
        });

        const fetchUrl = this.buildUrl(window.baseUrl, this.state.page, this.state.rowsPerPage);
        store.dispatch(fetchCars(fetchUrl));
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
        this.state.rowsPerPage = parseInt(event.target.value, 10);
        this.state.page = 0;

        store.dispatch({
            type: "page_size",
            payload: this.state.rowsPerPage
        });

        const fetchUrl = this.buildUrl(window.baseUrl, this.state.page, this.state.rowsPerPage);
        store.dispatch(fetchCars(fetchUrl));
    };

    handleSortChange = (event) => {
        this.setState({
            sort: event.target.value,
        });
        this.state.sort = event.target.value;
        console.log('value='+event.target.value);

        store.dispatch({
            type: "sort",
            payload: this.state.sort
        });

        const fetchUrl = this.buildUrl(window.baseUrl, this.state.page, this.state.rowsPerPage, this.state.sort);
        store.dispatch(fetchCars(fetchUrl));
    }

    render() {
        const cars = this.props.cars;
        const totalCars = this.props.totalCars;
        const { page, rowsPerPage, sort } = this.state;

        return <div className='card-grid'>
            <div className='card-grid-content'>
                <Grid container justifyContent="flex-end">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">SORT BY</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={sort}
                            onChange={this.handleSortChange}
                            label="Sort"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='price'>Price</MenuItem>
                            <MenuItem value='year'>Year</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-arrow-down" /> */}
                </Grid>
            </div>
            <div className='card-grid-with-pagination'>
                <div className='card-grid'>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {cars.map((car, index) => {
                                car.makeName = car.makeName.replace('-', ' ');
                                const convertedCarPrice = car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                return (
                                    <Grid item xs={2} sm={4} md={3} key={index}>
                                        <Card sx={{ maxWidth: 500 }}>
                                            <CardMedia
                                                component="img"
                                                alt="image not displayed"
                                                height="140"
                                                image={car.mainPictureUrl}
                                            />
                                            <CardContent>
                                                <Typography variant="subtitle1">
                                                    <span className="make">{car.year} {car.makeName}</span>
                                                    <span className="model">{car.modelName}</span>
                                                </Typography>
                                                <Typography variant="body1">
                                                    <span className="priceAndMileage">${convertedCarPrice}  <span>&#8284;</span> {car.mileage} mi</span>
                                                </Typography>
                                                <Divider />
                                                <Typography variant="body2" sx={{ pt: 0.5 }}>
                                                    {car.city}, {car.country}, {car.zip}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </ThemeProvider>
                </div>
                &nbsp;
                <div className='pagination'>
                    <TablePagination
                        component="div"
                        count={totalCars}
                        page={page}
                        onPageChange={this.handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[window.carsPerPage, window.carsPerPage * 2, window.carsPerPage * 3]}
                        onRowsPerPageChange={this.handleChangeRowsPerPage}
                    />
                </div>
            </div >
        </div>
    }
}

export default connect(mapStateToProps)(CarGrid);
