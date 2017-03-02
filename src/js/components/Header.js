import React from "react";

import Title from "./Header/Title";

// export it so it can be require
export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    console.log(this);
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
