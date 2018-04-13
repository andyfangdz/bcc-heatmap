import React, { Component } from 'react';
import { render } from 'react-dom';
import { genBins } from '@vx/mock-data';

import HeatMap from './components/HeatMap';

import './styles';

const NUM_ROWS = 64;
const NUM_COLS = 128;

class App extends React.Component {
  state = {
    data: genBins(NUM_COLS, NUM_ROWS),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ data: genBins(NUM_COLS, NUM_ROWS) });
    }, 1000);
  }
  render() {
    return (
      <div>
        <HeatMap events={true} data={this.state.data} cellSize={4} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
