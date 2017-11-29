/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */


import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import * as reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
console.log('loaded');

const loggerMiddleware = createLogger()
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

export default store;
