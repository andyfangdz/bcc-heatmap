import React from 'react';
import { Elevation, Card } from '@blueprintjs/core';
import { withRouter, Link } from 'react-router-dom';

function MetricCard({ metric, interactive = false }) {
  return (
    <Card
      key={metric.name}
      interactive={interactive}
      elevation={Elevation.TWO}
      onClick={
        interactive ? () => history.push(`/heatmaps/${metric.name}`) : null
      }
    >
      <h5>
        <Link to={`/heatmaps/${metric.name}`}>{metric.title}</Link>
      </h5>
      <p>
        <code>{metric.name}</code>
      </p>
      <p>{metric.description}</p>
    </Card>
  );
}

export default withRouter(MetricCard);
