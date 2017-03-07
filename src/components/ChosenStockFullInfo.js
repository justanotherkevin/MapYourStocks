import React, { Component } from 'react';
import '../stylesheets/chosenstockfullinfo.css';

class ChosenStockFullInfo extends Component {
  render() {
    return (
      <div className="stock-full-info">
            <ul>
              <li><h3>Name: {this.props.data.Name} </h3></li>
              <li>Ticker: {this.props.data.symbol}</li>
              <li>Ask: {this.props.data.Ask} </li>
              <li>Open: {this.props.data.Open}</li>
              <li>Days Range: {this.props.data.DaysRange}</li>
              <li>Year Range: {this.props.data.YearRange}</li>
              <li>Previous Close: {this.props.data.PreviousClose} </li>
              <li>Percent Change: {this.props.data.PercentChange}</li>
              <li>Last Trade Date: {this.props.data.LastTradeDate} </li>
              <li>Last Trade PriceOnly: {this.props.data.LastTradePriceOnly}</li>
              <li>Last Trade Time: {this.props.data.LastTradeTime}</li>
              <li>Change: {this.props.data.Change}</li>
              <li>Change in Percent: {this.props.data.ChangeinPercent}</li>
              <li>Volume: {this.props.data.Volume} </li>
              <li>Average Daily Volume: {this.props.data.AverageDailyVolume}</li>
              <li>PEG Ratio: {this.props.data.PEGRatio}</li>
            </ul>

      </div>
    )
  }
}
export default ChosenStockFullInfo;
