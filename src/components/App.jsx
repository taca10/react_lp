import React, { Component } from 'react';

import HeroGrid from './HeroGrid/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <HeroGrid />
      </div>
    );
  }
}

export default App;
