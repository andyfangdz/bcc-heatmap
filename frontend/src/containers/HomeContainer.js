// file: /components/LinkButton.jsx
import React from 'react';
import { withRouter } from 'react-router-dom';
import MetricCard from '../components/MetricCard';
import { METRICS_AVAILABLE } from '../constants';

function HomeContainer({ history, location, match, staticContext }) {
  return (
    <article>
      <h2>Pick a metrics to start viewing heatmap.</h2>
      <article>
        {METRICS_AVAILABLE.map(it => (
          <MetricCard metric={it} interactive={true} />
        ))}
      </article>
    </article>
  );
}

export default withRouter(HomeContainer);
