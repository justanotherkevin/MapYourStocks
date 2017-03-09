import React, { Component } from 'react';
import ChosenStockSimple from "./ChosenStockSimple";

class ChosenStocks extends Component {

  render() {
    // debugger
    return(
      <section className="main-body">
        <ul>
        {
          this.props.data.map((element, i) => {
            return (
              <ChosenStockSimple key={i}
                     symbol={element.symbol}
                     name={element.Name}
                     change={element.ChangeinPercent}
                     ask={element.Ask}
                     bid={element.Bid}
                     current={element.LastTradePriceOnly}
                     setFullInfoComp={this.props.setFullInfoComp}
                    //  setStockInfo={this.props.setStockInfo}
                    //  changeStock={this.props.changeStock(ticker)}
              />
            )
          })
        }
        </ul>
      </section>
    )
  }
}

export default ChosenStocks;
