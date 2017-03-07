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
      oneFullStockInfo: []
    }
  }

  componentWillMount() {
    console.log("did mount ");
    this.callYahooApi();
    this.setFullInfoComp('DBC');
  }

  render() {
    console.log("render yahoo api " + this.state.yahooApiReturn)
    // debugger
    return (
      <div className="Site-container" >
        <Header title={this.state.title}/>
        <ChosenStocks data={this.state.yahooApiReturn} />
        <ChosenStockFullInfo data={this.state.oneFullStockInfo}/>
      </div>
    )
  }

  callYahooApi() {
    console.log("call api not yet");
    var stocksUrl = this.state.currentStocks.join('%20');
    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + stocksUrl + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
    $.getJSON(url).done(
      (data)=>{this.setState({
      yahooApiReturn: data.query.results.quote})
    })
  }

  setFullInfoComp(ticker) {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + ticker + '%20%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
    $.getJSON(url).done(
      (data)=>{this.setState({oneFullStockInfo:data.query.results.quote} )
    })
  }

  // setFullStockInfo() {
  //   this.setState({
  //     oneFullStockInfo: this.state.yahooApiReturn[0]
  //   })
  // };
// componentDidMount() {
//   let refresh = setInterval(() => {
//     this.callStockList()
//   }, 3000);
//   this.setState({intervalId: refresh})
// }

}
export default App;
