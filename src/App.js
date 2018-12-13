import React from 'react';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

