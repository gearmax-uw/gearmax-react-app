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
import "./styles.css";

const theme = createTheme({
    // overrides: {
    //     MuiCardContent: {
    //         root: {
    //             border: "1px solid gray",
    //             "&:last-child": {
    //                 paddingBottom: "initial"
    //             }
    //         }
    //     }
    // },
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
            rowsPerPage: window.carsPerPage
        }
    }

    buildUrl(url, currentPage, currentRowsPerPage) {
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

    render() {
        const cars = this.props.cars;
        const totalCars = this.props.totalCars;
        const { page, rowsPerPage } = this.state;
        // console.log(totalCars);

        return <div className='card-grid-with-pagination'>
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
            & nbsp;
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
    }
}

export default connect(mapStateToProps)(CarGrid);
