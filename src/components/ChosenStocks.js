import React, { Component } from 'react';
import ChosenStockSimple from "./ChosenStockSimple";

class ChosenStocks extends Component {

  render() {
    return(
      <section className="main-body">
        <ul>
        {
          this.props.data.map((element, i) => {
            return (
              <ChosenStockSimple key={i}
                     symbol={element.symbol}
                     name={element.Name}
                     change={element.Change}
                     high={element.DaysHigh}
                     low={element.DaysLow}
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
