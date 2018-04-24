import { observer } from "mobx-react";

// file: /components/LinkButton.jsx
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import MetricView from './MetricView';


function HeatmapContainer({ history, location, match, staticContext }) {
  return (
    <Switch>
      <Route path="/heatmaps" component={HomeContainer} exact={true} />
      <Route path="/heatmaps/:metric" component={MetricView} />
    </Switch>
  );
}

export default withRouter(observer(HeatmapContainer));
