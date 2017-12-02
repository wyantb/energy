/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import { VictoryTheme, VictoryChart, VictoryLine } from 'victory';
import isEmpty from 'lodash/isEmpty';

export default class SummaryPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }

    if (!this.props.isLoaded) {
      this.props.fetchData(this.props.userId);
    }
  }

  render() {
    if (!this.props.loggedIn) {
      this.props.redirectToLogin();
      return (<div>Logging out...</div>);
    }

    let graph;
    if (!isEmpty(this.props.energyUsers)) {
      graph = (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine data={this.props.energyUsers[0].energyUsage} />
        </VictoryChart>
      );
    }

    return (
      <div>
        <h2>Here's all about your energy usage {this.props.username}</h2>
        {!this.props.isLoaded ? (<div>Loading...</div>) : (<div>
            {this.props.homescoreSummary}
          </div>)}
        {graph}
      </div>
    );
  }
}
