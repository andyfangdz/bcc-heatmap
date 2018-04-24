import { Card, Elevation, Spinner } from '@blueprintjs/core';
import axios from 'axios';
import { observer } from 'mobx-react';
import { toByteArray } from 'base64-js';
// file: /components/LinkButton.jsx
import React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import HeatMap from '../components/HeatMap';
import Histogram from '../components/Histogram';
import MetricCard from '../components/MetricCard';
import { METRICS_AVAILABLE } from '../constants';
import { models } from '../gen/proto';

import appState from '../store';

@observer
class HistogramView extends React.Component {
  render() {
    return (appState.selectedDist === null ? null : <Histogram data={appState.selectedDist.bins}/>);
  }
}

@observer
class MetricView extends React.Component {
  state = {
    interval: 1000,
    intervalId: null,
    data: null,
    metric: null,
  };

  fetchData = async () => {
    const r = await axios(`/api/get_histogram/${this.state.metric.name}`);
    const pb = models.HistogramRender.decode(toByteArray(r.data.payload));
    this.setState({ data: pb.histograms });
  };


  componentWillMount() {
    this.setState({
      metric: METRICS_AVAILABLE.find(
        it => it.name === this.props.match.params.metric
      ),
    }, () => this.fetchData());
    // this.setState({
    //   intervalId: setInterval(this.fetchData, this.state.interval),
    // });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { history, location, match, staticContext, classes } = this.props;
    return (
      <Card className={Elevation.ONE}>
        <MetricCard metric={this.state.metric} /> <br />
        {this.state.data ? (
          <React.Fragment>
          <HeatMap events={true} data={this.state.data} cellSize={8} />

          </React.Fragment>
        ) : (
          <div >
            <Spinner large={true} />
          </div>
        )}
        <br />
        <HistogramView />
      </Card>
    );
  }
}

export default MetricView;
