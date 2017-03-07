import React, { Component } from 'react';
import ChosenStockSimple from "./ChosenStockSimple";

class ChosenStocks extends Component {
debugger

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
                     change={element.Change}
                     high={element.DaysHigh}
                     low={element.DaysLow}
                     current={element.LastTradePriceOnly}
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
