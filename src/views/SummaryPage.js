/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryTooltip, VictoryVoronoiContainer, VictoryAxis } from 'victory';
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
      console.log(this.props.energyUsers);
      graph = (
        <VictoryChart theme={VictoryTheme.material} containerComponent={<VictoryVoronoiContainer/>}
          height={250}
        >
          <VictoryAxis style={{
              ticks: { stroke: 'none' },
              tickLabels: { display: 'none' },
            }} />
          <VictoryAxis dependentAxis />
          <VictoryLine data={this.props.energyUsers[0].energyUsage}
            labelComponent={<VictoryTooltip />}
          />
        </VictoryChart>
      );
    }

    let graphAndIntro;
    if (graph) {
      graphAndIntro = (
        <div>
          <br/>
          <div>Here's what your energy usage looks like over the past month:</div>
          {graph}
        </div>
      );
    }

    return (
      <div>
        <h2>Here's all about your energy usage {this.props.username}</h2>
        {!this.props.isLoaded ? (<div>Loading...</div>) : (<div>
            {this.props.homescoreSummary}
          </div>)}
        {graphAndIntro}
      </div>
    );
  }
}
