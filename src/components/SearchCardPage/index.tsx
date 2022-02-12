import React from "react";
import "./styles.css";

interface PageState {
  currentPage: number, 
  groupCount: number, 
  startPage: number, 
  totalPage:number
}

export interface PageProps{
  pageCallbackFn:Function
  totalPage:number
}


export default class SearchCardPage extends React.Component<PageProps, PageState> {
    constructor(props:PageProps) {
        super(props);
        this.state = {
          currentPage: 1, 
          groupCount: 5, 
          startPage: 1, 
          totalPage: this.props.totalPage
        };
      }

    createPage = () => {
        const {currentPage, groupCount, startPage, totalPage} = this.state;
        let pages = []
        
        pages.push(<li className={currentPage === 1 ? "nomore" : "default"} 
            onClick={this.prePageHandeler.bind(this)}
                key={0}>
          Pre</li>)
     
        if (totalPage <= 10) {
          
          for (let i = 1; i <= totalPage; i++) {
            pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                    className={currentPage === i ? "activePage" : "default"}>{i}</li>)
          }
        } else {
          
     
         
          pages.push(<li className={currentPage === 1 ? "activePage" : "default"} key={1}
                  onClick={this.pageClick.bind(this, 1)}>1</li>)
     
          let pageLength = 0;
          if (groupCount + startPage > totalPage) {
            pageLength = totalPage
          } else {
            pageLength = groupCount + startPage;
          }
          
          if (currentPage >= groupCount) {
            pages.push(<li className="" key={-1}>···</li>)
          }
         
          for (let i = startPage; i < pageLength; i++) {
            if (i <= totalPage - 1 && i > 1) {
              pages.push(<li className={currentPage === i ? "activePage" : "default"} key={i}
                      onClick={this.pageClick.bind(this, i)}>{i}</li>)
            }
          }
          
          if (totalPage - startPage >= groupCount + 1) {
            pages.push(<li className="" key={-2}>···</li>)
          }
          
          pages.push(<li className={currentPage === totalPage ? "activePage" : "default"} key={totalPage}
                  onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
        }
        
        pages.push(<li className={currentPage === totalPage ? "nomore" : "default"}
                onClick={this.nextPageHandeler.bind(this)}
                key={totalPage + 1}>Next</li>)
        return pages;
      }

      
  pageClick= (currentPage: number) => {
    const {groupCount} = this.state
    const getCurrentPage = this.props.pageCallbackFn;
    
    if (currentPage >= groupCount) {
      this.setState({
        startPage: currentPage - 2,
      })
    }
    if (currentPage < groupCount) {
      this.setState({
        startPage: 1,
      })
    }
    
    if (currentPage === 1) {
      this.setState({
        startPage: 1,
      })
    }
    this.setState({
      currentPage
    })
    
    getCurrentPage(currentPage)
}



prePageHandeler = ()=> {
    let {currentPage} = this.state
    if (--currentPage === 0) {
      return false
    }
    this.pageClick(currentPage)
  }
 
  
  nextPageHandeler = ()=> {
    let {currentPage,totalPage} = this.state
    
    if (++currentPage > totalPage) {
      return false
    }
    this.pageClick(currentPage)
  }

  render() {
    const pageList = this.createPage();
    return (
      <ul className="pageContainer">
        {pageList}
      </ul>
    )
  }

}
