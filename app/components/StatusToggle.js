import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Toggle, Text, Layout} from '@ui-kitten/components';

import {toggleStatus} from '../actions/route';
import {FlexStyleProps} from '@ui-kitten/components/devsupport';

class StatusToggle extends Component {
  onCheckedChange(isChecked) {
    this.props.toggleStatus(isChecked ? 'ACTIVE' : 'INACTIVE');
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Text style={styles.text}>
          {this.props.status === 'ACTIVE' ? 'Online' : 'Offline'}
        </Text>
        <Toggle
          checked={this.props.status === 'ACTIVE'}
          onChange={this.onCheckedChange.bind(this)}></Toggle>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  text: {
    margin: 10,
  },
});

const mapStateToProps = (state) => ({status: state.route.status});

const mapDispatchToProps = {
  toggleStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusToggle);
