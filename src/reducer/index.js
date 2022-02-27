import { combineReducers } from "redux";
import { SUCCESS_FETCH_CARS, TOTAL_ELEMENTS_UPDATE, FILTER_SUBMIT } from "../action";

function filterParam(state = {}, action) {
    switch (action.type) {
        case "mileage":
            return {
                ...state,
                mileage: action.payload
            };
        case "body":
            return {
                ...state,
                body: action.payload
            };
        case "fuel":
            return {
                ...state,
                fuel: action.fuel
            };
        case "city":
            return {
                ...state,
                city: action.payload
            };
        case "color":
            return {
                ...state,
                color: action.payload
            };
        case "make":
            return {
                ...state,
                make: action.payload
            };
        case "price_high":
            return {
                ...state,
                price_high: action.payload
            };
        case "price_low":
            return {
                ...state,
                price_low: action.payload
            };
        case "seating":
            return {
                ...state,
                seating: action.payload
            };
        case "transmission":
            return {
                ...state,
                transmission: action.payload
            };
        case "transmission_display":
            return {
                ...state,
                transmission_display: action.payload
            };
        case "year_high":
            return {
                ...state,
                year_high: action.payload
            };
        case "year_low":
            return {
                ...state,
                year_low: action.payload
            };
        case "page_size":
            return {
                ...state,
                page_size: action.payload
            };
        case "page_index":
            return {
                ...state,
                page_index: action.payload
            }
        case "sort":
            return {
                ...state,
                sort: action.payload
            }
        case "sort_order":
            return {
                ...state,
                sort_order: action.payload
            }
        case "clear":
            return {
                ...state,
                mileage: "",
                body: "",
                fuel: "",
                city: "",
                color: "",
                make: "",
                price_high: "",
                price_low: "",
                seating: "",
                transmission: "",
                transmission_display: "",
                year_high: "",
                year_low: ""
            }
        default:
            return state;
    }
}

const initMetaData = {
    totalElements: 0,
    filterSubmitted: false
}
function metaData(state = initMetaData, action) {
    switch (action.type) {
        case TOTAL_ELEMENTS_UPDATE:
            return {
                ...state,
                totalElements: action.payload.totalElements
            }
        case FILTER_SUBMIT:
            return {
                ...state,
                filterSubmitted: action.payload.filterSubmitted
            }
        default:
            return state;
    }
}

function carData(state = [], action) {
    switch (action.type) {
        case SUCCESS_FETCH_CARS:
            if (action.payload) {
                // console.log(action.payload);
                return action.payload;
            }
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    filterParam,
    metaData,
    carData
})