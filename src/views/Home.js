/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';

import DoLogin from '../containers/DoLogin';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Please login to view your energy usage.</h2>
        <DoLogin />
      </div>
    );
  }
}
