import React from "react";
// import all the other components to the layout
import Footer from "./Footer";
import Header from "./Header";
// exporting layout; to client.js

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcomeeeeee",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        {/* this is how you pass in props; changeTitle function */}
        {/* if you don't have bind this then it will execute on the contect of whoever is calling it  */}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
