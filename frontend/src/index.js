import React, { Component } from 'react';
import { render } from 'react-dom';
import { genBins } from '@vx/mock-data';

import HeatMap from './components/HeatMap';

import './styles';

const NUM_ROWS = 64;
const NUM_COLS = 128;

const genDist = () =>
  genBins(
    NUM_COLS,
    NUM_ROWS,
    i => i * 150,
    (i, n) => Math.random() * Math.tan((n / 2 - Math.abs(n / 2 - i)) / (n / 2))
  );

class App extends React.Component {
  state = {
    data: genDist(),
  };

  refresh = () => {
    this.setState(
      {
        data: genDist(),
      },
      () => setTimeout(this.refresh, 1000)
    );
  };

  componentDidMount() {
    setTimeout(this.refresh, 1000);
  }

  render() {
    return (
      <div>
        <HeatMap events={true} data={this.state.data} cellSize={8} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
