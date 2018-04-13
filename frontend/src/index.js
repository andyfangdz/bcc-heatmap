import React, { Component } from 'react';
import { render } from 'react-dom';
import { genBins } from '@vx/mock-data';

import HeatMap from './components/HeatMap';

import './styles';

const NUM_ROWS = 64;
const NUM_COLS = 128;
const data = genBins(NUM_COLS, NUM_ROWS);

function App() {
  return (
    <div>
      <HeatMap events={true} data={data} cellSize={4} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
