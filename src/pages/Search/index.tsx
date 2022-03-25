import { lazy } from "react";
import store from "../../store";
import "./styles.css";
import { fetchCars } from '../../action'
const Filter = lazy(() => import("../../components/Filter"));
const CarCardGrid = lazy(() => import("../../components/CarGrid"))

const Search = () => {
  store.dispatch(fetchCars(window.baseUrl+"?pageSize="+window.carsPerPage+"&pageIndex=0"));
  return (
    <div className="gridWrapper">
      <div className="filterBox">
        <Filter></Filter>
      </div>
      <div className="cardPageBox">
        <CarCardGrid></CarCardGrid>
      </div>
    </div>
  );
};

export default Search;
