/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import isEqual from 'lodash/isEqual';

import { Provider } from 'react-redux'
import store from '../store';
import router from '../router';
import history from '../history';
import AppRenderer from './AppRenderer';

type Render = (Array<React.Element<*>>, ?Object, ?Object) => any;

type State = {
  location: Location,
  params: Object,
  variables: Object,
  components: ?Array<React.Element<*>> | Promise<Array<React.Element<*>>>,
  render: ?Render,
};

class App extends React.Component<any, any, State> {
  state = {
    location: history.location,
    params: {},
    variables: {},
    components: null,
    render: null,
  };

  unlisten: () => void;

  componentDidMount() {
    // Start watching for changes in the URL (window.location)
    this.unlisten = history.listen(this.resolveRoute);
    this.resolveRoute(history.location);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  resolveRoute = (location: Location) =>
    // Find the route that matches the provided URL path and query string
    router.resolve({ path: location.pathname }).then(route => {
      const variables = isEqual(this.state.variables, route.variables)
        ? this.state.variables
        : route.variables;
      this.setState({ ...route, location, variables });
    });

  render() {
    return (
      <Provider store={store}>
        <AppRenderer
          location={this.state.location}
          params={this.state.params}
          components={this.state.components}
          render={this.state.render}
        />
      </Provider>
    );
  }
}
export default App;
