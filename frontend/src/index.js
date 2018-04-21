import React, { Component } from 'react';
import { render } from 'react-dom';
import { genBins } from '@vx/mock-data';
import { models } from './gen/proto';
import { toByteArray } from 'base64-js';
import axios from 'axios';

import HeatMap from './components/HeatMap';

import './styles';

class App extends React.Component {
  state = {
    data: null,
  };

  fetchData = async () => {
    const r = await axios('/api/get_histogram/bio_latency');
    const pb = models.HistogramRender.decode(toByteArray(r.data.payload));
    this.setState({ data: pb.histograms });
  };

  componentDidMount() {
    setInterval(this.fetchData, 1000);
  }

  render() {
    return (
      <div>
        {this.state.data && (
          <HeatMap events={true} data={this.state.data} cellSize={16} />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
