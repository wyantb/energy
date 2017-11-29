
import React from 'react';
import Link from './Link';

export default class Login extends React.Component {
  render() {
    return (
      <Link onClick={this.props.loggedIn ? this.props.onSummaryClick : this.props.onLoginClick}
        href="#"
      >
        {this.props.display}
      </Link>
    );
  }
};
