// file: /components/LinkButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import { withRouter } from 'react-router-dom';

function LinkButton({
  history,
  location,
  match,
  staticContext,
  to,
  onClick,
  ...rest
}) {
  return (
    <Button
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default withRouter(LinkButton);
