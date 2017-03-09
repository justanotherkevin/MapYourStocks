import React, { Component } from 'react';
import '../stylesheets/chosenstocksimple.css';
class ChosenStockSimple extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.setFullInfoComp(this.props.symbol);
  }

  render() {
    let showStock='stocks/'+ this.props.symbol
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
            <th> High </th>
            <th> Low </th>
            <th> Current </th>
          </tr>
          <tr>
            <td> {this.props.change} </td>
            <td> {this.props.high} </td>
            <td> {this.props.low} </td>
            <td> {this.props.current} </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}
export default ChosenStockSimple;
