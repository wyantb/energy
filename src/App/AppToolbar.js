/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../views/Link';
import AppLogo from './AppLogo';

const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  flex-direction: column;
  background-color: #e6168b;
  justify-content: space-between;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 959px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (max-width: 599px) {
    min-height: 56px;
  }
`;

const Section = styled.section`
  z-index: 1;
  display: inline-flex;
  min-width: 0;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: ${props =>
    props.start ? 'flex-start' : props.end ? 'flex-end' : 'center'};
  order: ${props => (props.start ? -1 : props.end ? 1 : null)};
`;

const TitleLink = styled(Link)`
  z-index: 1;
  display: inline-flex;
  padding: 16px 0;
  margin: 0;
  margin-left: 24px;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #00d8ff;
  text-decoration: none;
  text-overflow: ellipsis;
  letter-spacing: 0.0625em;
  white-space: nowrap;
  align-self: center;
  align-items: center;

  @media (max-width: 599px) {
    margin-left: 16px;
  }

  &.title:active,
  &.title:hover,
  &.title:visited {
    color: #00d8ff;
  }
`;

const Logo = styled(AppLogo)`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

const NavLink = styled(Link)`
  padding-right: 8px;
  padding-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default class AppToolbar extends React.Component {
  props: {
    me: AppToolbar_me,
    hero: React.Element<*>,
  };

  render() {
    return (
      <Header>
        <Row>
          <Section start>
            <TitleLink href="/">
              <Logo />
            </TitleLink>
          </Section>
          <Section end>
            <NavLink href="#">About</NavLink>
          </Section>
        </Row>
        {this.props.hero &&
          React.cloneElement(this.props.hero, {
            style: {
              maxWidth: '1000px',
              alignSelf: 'center',
            },
          })}
      </Header>
    );
  }
}
