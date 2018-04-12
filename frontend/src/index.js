import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button, Intent, Spinner } from '@blueprintjs/core';

import './styles';

class App extends Component {
  render() {
    return <Spinner intent={Intent.PRIMARY} />;
  }
}

render(<App />, document.getElementById('root'));
