
import React from 'react';
import Link from './Link';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export default class Login extends React.Component {
  render() {
    let loginForm;
    if (!this.props.loggedIn) {
      loginForm = (
        <form onSubmit={this.props.onLoginClick}>
          <FormGroup>
            <ControlLabel>Name:&nbsp;
              <FormControl type="text" value={this.props.userName} onChange={this.props.nameChange} />
            </ControlLabel>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Id:&nbsp;
              <FormControl type="text" value={this.props.userId} onChange={this.props.userChange} />
            </ControlLabel>
          </FormGroup>
        </form>
      );
    }

    return (
      <div>
        {loginForm}
        <Button onClick={this.props.loggedIn ? this.props.onSummaryClick : this.props.onLoginClick}
          href="#" bsStyle="primary"
        >
          {this.props.display}
        </Button>
      </div>
    );
  }
};
