import React, { Component } from 'react';
import '../stylesheets/chosenstocksimple.css';
class ChosenStockSimple extends Component {

  roundToTwo(num) {
    if(num === null) {
      return ' ';
    } else
      return +(Math.round(num + "e+2")  + "e-2");
  }

  handleClick(e) {
    e.preventDefault();
    this.props.setFullInfoComp(this.props.symbol);
  }

  render() {
    // debugger
    return(
      <div className='stock'>

        <a>
          <h3 onClick={this.handleClick.bind(this)} className='symbol'>{this.props.symbol}</h3>
        </a>
        <span><h3 className='symbol'>{this.props.name}</h3></span>
        <table className="table table-striped">
          <tbody>
          <tr>
            <th> Change </th>
            <th> Ask </th>
            <th> Bid </th>
            <th> Current </th>
          </tr>
          <tr>
            <td className='flash'> {this.props.change} </td>
            <td className='flash'> {this.roundToTwo(this.props.ask)} </td>
            <td className='flash'> {this.roundToTwo(this.props.bid)} </td>
            <td className='flash'> {this.roundToTwo(this.props.current)} </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}
export default ChosenStockSimple;
