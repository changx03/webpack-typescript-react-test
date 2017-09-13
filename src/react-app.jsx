import * as React from "react";

export class App extends React.Component {
  render() {
    let { name } = this.props;

    return (
      <div>
        <h1>Hello World! from {name}</h1>
      </div>
    );
  }
}