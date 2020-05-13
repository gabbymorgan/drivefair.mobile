import React from 'react';
import {connect} from 'react-redux';
import {Toggle} from '@ui-kitten/components';

import {toggleStatus} from '../actions/route';

export const StatusToggle = (props) => {
  const onCheckedChange = (isChecked) => {
    props.toggleStatus(isChecked ? 'ACTIVE' : 'INACTIVE');
  };

  return (
    <Toggle checked={props.status === 'ACTIVE'} onChange={onCheckedChange}>
      {props.status === 'ACTIVE' ? 'Online' : 'Offline'}
    </Toggle>
  );
};

const mapStateToProps = (state) => ({status: state.route.status});

const mapDispatchToProps = {
  toggleStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusToggle);
