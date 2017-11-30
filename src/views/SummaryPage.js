/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';

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

    return (
      <div>
        <h2>Here's all about your energy usage {this.props.username}</h2>
        {!this.props.isLoaded ? (<div>Loading...</div>) : (<div>
            {this.props.homescoreSummary}
          </div>)}
      </div>
    );
  }
}
