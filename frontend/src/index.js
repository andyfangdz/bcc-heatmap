import { observer } from "mobx-react";
import React from 'react';
import { render } from 'react-dom';
import MainAppWithRoutes from './components/MainAppWithRoutes';
import HeatmapContainer from './containers/HeatmapContainer';

import './styles';
import HomeContainer from './containers/HomeContainer';

/*
{this.state.data && (
            <HeatMap events={true} data={this.state.data} cellSize={8} />
          )}
          <Histogram />
 */

const App = observer(MainAppWithRoutes('Heatmaps Dashboard', [
  {
    name: 'Home',
    title: 'Home',
    path: '/',
    exact: true,
    component: HomeContainer,
  },
  {
    name: 'Heatmaps',
    title: 'Heatmaps',
    path: '/heatmaps',
    exact: false,
    component: HeatmapContainer,
  },
  {
    name: 'Settings',
    title: 'Settings',
    path: '/settings',
    exact: true,
    component: () => <h1>Settings</h1>,
  },
]));

render(<App />, document.getElementById('root'));
