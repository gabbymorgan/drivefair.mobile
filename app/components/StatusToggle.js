import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Toggle} from '@ui-kitten/components';

import {toggleStatus} from '../actions/route';

class StatusToggle extends Component {
  componentDidMount() {
    console.log('mounted', this.props.status);
  }

  onCheckedChange(isChecked) {
    this.props.toggleStatus(isChecked ? 'ACTIVE' : 'INACTIVE');
  }

  render() {
    return (
      <Toggle
        checked={this.props.status === 'ACTIVE'}
        onChange={this.onCheckedChange.bind(this)}>
        {this.props.status === 'ACTIVE' ? 'Online' : 'Offline'}
      </Toggle>
    );
  }
}

const mapStateToProps = (state) => ({status: state.route.status});

const mapDispatchToProps = {
  toggleStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusToggle);
