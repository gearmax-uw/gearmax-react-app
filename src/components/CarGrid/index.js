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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Box from '@mui/material/Box';
import "./styles.css";
import { withStyles } from "@material-ui/core/styles";
import noResultImg from "../../imgs/noresult.png";
import noPreviewImg from "../../imgs/noimage.jpg"

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
            sort: "",
            sortOrder: "asc",
        }
    }

    buildUrl(url, currentPage, currentRowsPerPage, sort, sortOrder) {
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
            if (sortOrder) {
                url = url + "&sortOrder=" + sortOrder;
            } else {
                if (store.getState().filterParam && store.getState().filterParam.sort_order) {
                    url = url + "&sortOrder=" + this.props.filterParam.sort_order;
                } else if (this.state.sortOrder) {
                    url = url + "&sortOrder=" + this.state.sortOrder;
                }
            }
        } else {
            if (store.getState().filterParam && store.getState().filterParam.sort) {
                url = url + "&sort=" + this.props.filterParam.sort;
            }
            if (sortOrder) {
                url = url + "&sortOrder=" + sortOrder;
            } else {
                if (store.getState().filterParam && store.getState().filterParam.sort_order) {
                    url = url + "&sortOrder=" + this.props.filterParam.sort_order;
                } else if (this.state.sortOrder) {
                    url = url + "&sortOrder=" + this.state.sortOrder;
                }
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

        store.dispatch({
            type: "sort",
            payload: this.state.sort
        });

        const fetchUrl = this.buildUrl(window.baseUrl, this.state.page, this.state.rowsPerPage, this.state.sort);
        store.dispatch(fetchCars(fetchUrl));
    }

    swapSort = () => {
        if (this.state.sort) {
            if (this.state.sortOrder === "desc") {
                this.setState({
                    sortOrder: "asc",
                });
                this.state.sortOrder = "asc";
            } else if (this.state.sortOrder === "asc") {
                this.setState({
                    sortOrder: "desc",
                });
                this.state.sortOrder = "desc";
            }
            store.dispatch({
                type: "sort_order",
                payload: this.state.sortOrder
            });
            const fetchUrl = this.buildUrl(window.baseUrl, this.state.page, this.state.rowsPerPage, this.state.sort, this.state.sortOrder);
            store.dispatch(fetchCars(fetchUrl));
        }
    }

    checkImage(url) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();
        request.onload = function () {
            if (request.status == 200) //if(statusText == OK)
            {
                return true;
            } else {
                return false;
            }
        }
    }

    render() {
        const cars = this.props.cars;
        const totalCars = this.props.totalCars;
        const { page, rowsPerPage, sort, sortOrder } = this.state;
        if (totalCars == 0) {
            return (
                <div className='image-container'>
                    <img className='image-no-result' src={noResultImg} />
                    <span className='no-result-text'>No Result Found</span>
                </div>
            );
        }
        return <div className='card-grid'>
            <div className='card-grid-header'>
                <Box sx={{ px: "2rem" }}>
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
                        <IconButton type="submit" sx={{ p: '1px' }} aria-label="swap" onClick={() => this.swapSort()}>
                            <SwapVertIcon />
                        </IconButton>
                    </Grid>
                </Box>
            </div>
            <div className='card-grid-with-pagination'>
                <div className='card-grid'>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {cars.map((car, index) => {
                                if (!car.mainPictureUrl || this.checkImage(car.mainPictureUrl) === false) {
                                    car.mainPictureUrl = noPreviewImg;
                                }
                                car.makeName = car.makeName.replace('-', ' ');
                                const convertedCarPrice = car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                return (
                                    <Grid item xs={2} sm={4} md={3} key={index}>
                                        <Card sx={{ maxWidth: 500 }}>
                                            <CardMedia
                                                component="img"
                                                alt="No Image"
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
