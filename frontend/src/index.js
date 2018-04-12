import React, { Component } from 'react';
import { render } from 'react-dom';

import HeatMap from './components/HeatMap';

import './styles';

class App extends Component {
  render() {
    return (
      <div>
        <HeatMap
          width={800}
          height={500}
          events={true}
          margin={{
            top: 10,
            left: 40,
            right: 30,
            bottom: 80,
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
