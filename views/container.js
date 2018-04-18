import React from 'react';

import Header from "./Header";

class Container extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { gameId: 1 };
  }

  // createNewGame() {
  //   this.setState({ gameId: this.state.gameId + 1 });
  // }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Container;
