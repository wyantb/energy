
import React from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

const InlineFormControl = styled(FormControl)`
display: inline-block;
width: 200px;
margin: 0 5px;
`
const SpacedButton = styled(Button)`
margin-left: 5px;
`

export default class AddComparison extends React.Component {
  render() {
    let addComparisonAction;
    if (!this.props.addHidden) {
      addComparisonAction = (
        <SpacedButton onClick={this.props.addFriend.bind(this, this.props.userId)} bsStyle="primary" disabled={this.props.addDisabled}>
          Add Friend
        </SpacedButton>
      );
    }

    return (
      <FormGroup>
        <InlineFormControl type="text" value={this.props.userName || ''} onChange={this.props.nameChange}
          placeholder="Enter friend's name to compare" disabled={this.props.disabled} />
        <InlineFormControl type="text" value={this.props.userId || ''} onChange={this.props.userChange}
          placeholder="Enter friend's id to compare" disabled={this.props.disabled} />
        {addComparisonAction}
      </FormGroup>
    );
  }
};
