/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import Router from 'universal-router';

// The list of all application routes where each route contains a URL path string (pattern),
// the list of components to load asynchronously (chunks), data requirements,
// and a render() function which shapes the result to be passed into the top-level (App) component.
// For more information visit https://github.com/kriasoft/universal-router
const routes = [
  {
    path: '/',
    components: () => [
      import(/* webpackChunkName: 'home' */ './views/Home'),
    ],
    render: ([Home], data) => ({
      title: 'Home page',
      body: <Home />,
    }),
  },
  {
    path: '/error',
    components: () => [import(/* webpackChunkName: 'main' */ './views/ErrorPage')],
    render: ([ErrorPage]) => ({
      title: 'Error',
      body: <ErrorPage />,
    }),
  },
  {
    path: '/summary',
    components: () => [import(/* webpackChunkName: 'main' */ './containers/SummaryPage')],
    render: ([SummaryPage]) => ({
      title: 'Your Energy Usage',
      body: <SummaryPage />,
    }),
  },
];

function resolveRoute({ route, fetch, next }, params) {
  // Skip routes that have no .render() method
  if (!route.render) return next();

  // Shape the result to be passed into the top-level React component (App)
  return {
    params,
    variables:
      typeof route.variables === 'function'
        ? route.variables(params)
        : { ...params },
    components:
      typeof route.components === 'function'
        ? Promise.all(
            route.components().map(promise => promise.then(x => x.default)),
          ).then(components => (route.components = components))
        : route.components,
    render: route.render,
  };
}

export default new Router(routes, { resolveRoute });
