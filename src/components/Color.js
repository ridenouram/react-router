import React from 'react';
import PropTypes from 'prop-types';

export default function Color({ match }) {
  return (
    <div style={{ background: match.params.id, height: '200px', width: '200px' }} />
  );
}
