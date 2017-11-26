/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const StoryList = styled.ul`padding: 0;`;

const Story = styled.li`
  padding-bottom: 0.5em;
  list-style: none;
`;

export default class Home extends React.Component {
  props: {
    stories: Home_stories,
  };

  render() {
    return (
      <div>
        <h2>Welcome to React Static Boilerplate</h2>
      </div>
    );
  }
}
