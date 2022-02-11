//import { Card } from "antd";
import { lazy } from "react";
import "./styles.css";
import CardContent from "../../content/CardContent.json";
const Filter = lazy(() => import("../../components/Filter"));
const CardGrid = lazy(() => import("../../components/SearchCard"));

const Search = () => {
  const cardNum = 50;
  const CardList = Array.from({length : cardNum},  () => {return{CardAttr: CardContent}});
  return (
    <div className="gridWrapper">
      <div className="filterBox">
          <Filter></Filter>
       </div>
      <div className="cardPageBox">
          {<CardGrid cardNums={cardNum}  CardList={CardList}/>
          }
      </div>
    </div>
  );
};

export default Search;
