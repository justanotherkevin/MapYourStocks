import React, { Component } from 'react';
// import '../stylesheets/app.css';
import Header from '../components/Header';
import ChosenStocks from './ChosenStocks';
import ChosenStockFullInfo from './ChosenStockFullInfo';

var $ = require('jquery');

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: "MapYourStocks",
      currentStocks: ['EBAY', 'APPL', 'MSFT', 'GOOG', 'FB', 'TWTR'],
      yahooApiReturn: [],
      oneFullStockInfo: [],
      intervalId: {}
    }
  }

  componentWillMount() {
    this.callYahooApi();
  }

  componentDidMount() {
    let refresh = setInterval(() => {
      this.callYahooApi();
    }, 2000);
    this.setState({intervalId: refresh})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {

    return (
      <div className="Site-container" >
        <Header title={this.state.title}/>
        <div className="body-container">
          <ChosenStocks data={this.state.yahooApiReturn} setFullInfoComp={this.setFullInfoComp.bind(this)}/>
          <ChosenStockFullInfo data={this.state.oneFullStockInfo}/>
        </div>
      </div>
    )
  }

  callYahooApi() {
    var stocksUrl = this.state.currentStocks.join('%20');
    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + stocksUrl + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
    $.getJSON(url).done(
      (data)=>{this.setState({
      yahooApiReturn: data.query.results.quote})
    })
  }

  setFullInfoComp(ticker) {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + ticker + '%20%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
    $.getJSON(url).done(function(response) {
      var data = response.query.results.quote;
      this.setState({oneFullStockInfo: data});
    }.bind(this))
  }

}
export default App;
