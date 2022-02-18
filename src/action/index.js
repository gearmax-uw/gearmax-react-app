import axios from 'axios'

export const LOADING = "LOADING";
export const SUCCESS_FETCH_CARS = "SUCCESS_FETCH_CARS";
export const FAILURE = "FAILURE";
export const UPDATE = "UPDATE";
export const SUCCESSFUL_UPDATE = "SUCCESSFUL_UPDATE";
export const FILTER_URL_UPDATE = "FILTER_URL_UPDATE";
export const TOTAL_ELEMENTS_UPDATE = "TOTAL_ELEMENTS_UPDATE";
export const FILTER_SUBMIT = "FILTER_SUBMIT";

// send get url to backend to fetch cars
export const fetchCars = (url) => dispatch => {
    console.log("fetch url: " + url);
    dispatch({ type: LOADING })
    axios.get(url)
        .then(res => {
            // store fetched car data to readux store
            dispatch({ type: SUCCESS_FETCH_CARS, payload: res.data.data })
            // store total number of cars to readux store
            dispatch({
                type: TOTAL_ELEMENTS_UPDATE,
                payload: {
                    "totalElements": res.data.metaData.totalElements
                }
            })
        })
        .catch(err => dispatch({ type: FAILURE, payload: err }))
}