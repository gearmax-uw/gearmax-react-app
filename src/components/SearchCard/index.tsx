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

<<<<<<< HEAD
interface CardProps{
    CardAttr:{brand: string;
                        price: Number;
                        distance: Number;
                        owner:string;
                        phoneNumber?:string;
                        imgUrl?:string;
                        resultUrl:string;
                        };
=======
interface CardProps {
    CardAttr: {
        brand: string;
        price: Number;
        distance: Number;
        owner: string;
        phoneNumber?: string;
        imgUrl?: string;
        resultUrl: string;
    };
>>>>>>> affa919cc171938aabe7a048fb7289479e1e1f94
}

interface ImageShowProps {
    imageNums: number,
    imageUrl: Array<string>
}

<<<<<<< HEAD
const ImageShow = (props:ImageShowProps) => {
    
}

const Cards2 = (props:CardProps) => {
    const CardAttr=props.CardAttr;
    return(
=======
const ImageShow = (props: ImageShowProps) => {

}

const Cards2 = (props: CardProps) => {
    const CardAttr = props.CardAttr;
    return (
>>>>>>> affa919cc171938aabe7a048fb7289479e1e1f94
        <div className="card">
            <div>
                <a href={CardAttr.resultUrl}>
                    <img className="img"
                        alt="Car Image"
<<<<<<< HEAD
                        src={CardAttr.imgUrl ? CardAttr.imgUrl:"https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg"}
=======
                        src={CardAttr.imgUrl ? CardAttr.imgUrl : "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg"}
>>>>>>> affa919cc171938aabe7a048fb7289479e1e1f94
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

<<<<<<< HEAD
class CardGrid extends React.Component<CardGridProps,CardGridState>{
    constructor(props:CardGridProps){
=======
class CardGrid extends React.Component<CardGridProps, CardGridState>{
    constructor(props: CardGridProps) {
>>>>>>> affa919cc171938aabe7a048fb7289479e1e1f94
        super(props);
        this.getCurrentPage = this.getCurrentPage.bind(this);
        this.state = {
            //Cards2的参数没写完
            /*
            CardList: Array.from({length : this.props.cardNums},  () => Symbol("jack")).map(car=> (
                <Cards2 key={car.toString()}/> 
            )),*/
<<<<<<< HEAD
            
            pageConfig:1
=======

            pageConfig: 1
>>>>>>> affa919cc171938aabe7a048fb7289479e1e1f94
        };
    };

    getCurrentPage = (currentPage: number) => {
        this.setState({
            pageConfig: currentPage
<<<<<<< HEAD
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
        
=======
        });
    }

    render() {
        const pageConfig = this.state.pageConfig;
        const PageCards = 9;
        const totalPage = Math.ceil(this.props.cardNums / PageCards);
        const CardAttrList = this.props.CardList;
        const CardList = CardAttrList.map(car => (<Cards2 CardAttr={car.CardAttr} key={car.toString()} />));
        //const totalPage =2;
        return (
            <div className="wrapper">
                <div className="cardBox">
                    {CardList.slice((pageConfig - 1) * PageCards, pageConfig * PageCards)
                    }
                </div>
                <div className="pageBox">
                    {<SearchCardPage totalPage={totalPage} pageCallbackFn={this.getCurrentPage} />}
                </div>
            </div>
        )

>>>>>>> affa919cc171938aabe7a048fb7289479e1e1f94
    }
}

export default (CardGrid);