import React, { Fragment } from "react";
import SearchCardPage from "../SearchCardPage";

import "./styles.css";

interface CardGridState {
    pageConfig: number
}

export interface CardGridProps {
    cardNums: number,
    CardList: Array<CardProps>
}

interface CardProps{
    CardAttr:{brand: string;
                        price: Number;
                        distance: Number;
                        owner:string;
                        phoneNumber?:string;
                        imgUrl?:string;
                        resultUrl:string;
                        };
}

interface ImageShowProps {
    imageNums: number,
    imageUrl: Array<string>
}

const ImageShow = (props:ImageShowProps) => {
    
}

const Cards2 = (props:CardProps) => {
    const CardAttr=props.CardAttr;
    return(
        <div className="card">
            <div>
                <a href={CardAttr.resultUrl}>
                    <img className="img"
                        alt="Car Image"
                        src={CardAttr.imgUrl ? CardAttr.imgUrl:"https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg"}
                    />
                </a>
            </div>
            <div className="second">
                <div className="brand">
                    {CardAttr.brand}
                </div>
                <div className="price">
                    ${CardAttr.price}
                </div>
                <div className="owners">
                    <a href="http://localhost:3000/search">{CardAttr.owner}</a>
                </div>
            </div>
        </div>
    );
};

class CardGrid extends React.Component<CardGridProps,CardGridState>{
    constructor(props:CardGridProps){
        super(props);
        this.getCurrentPage = this.getCurrentPage.bind(this);
        this.state = {
            //Cards2的参数没写完
            /*
            CardList: Array.from({length : this.props.cardNums},  () => Symbol("jack")).map(car=> (
                <Cards2 key={car.toString()}/> 
            )),*/
            
            pageConfig:1
        };
    };

    getCurrentPage = (currentPage: number) => {
        this.setState({
            pageConfig: currentPage
          });
    }

    render() {
       const pageConfig = this.state.pageConfig;
       const PageCards = 9;
       const totalPage = Math.ceil(this.props.cardNums / PageCards);
       const CardAttrList = this.props.CardList;
       const CardList = CardAttrList.map(car => (<Cards2 CardAttr={car.CardAttr} key={car.toString()}/> ));
       //const totalPage =2;
        return(
                <div className="wrapper">
                    <div  className="cardBox">
                    {CardList.slice((pageConfig-1)*PageCards, pageConfig*PageCards)
                    }
                    </div>
                    <div className="pageBox">
                        {<SearchCardPage totalPage={totalPage} pageCallbackFn={this.getCurrentPage} />}
                    </div>
                </div>
        )
        
    }
}

export default (CardGrid);