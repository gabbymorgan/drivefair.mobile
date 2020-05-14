import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Toggle, Text, Layout, Spinner} from '@ui-kitten/components';

import {toggleStatus} from '../actions/route';

class StatusToggle extends Component {
  onCheckedChange(isChecked) {
    this.props.toggleStatus(isChecked ? 'ACTIVE' : 'INACTIVE');
  }

  render() {
    return (
      <Layout style={styles.container}>
        {this.props.isLoading ? (
          <Layout style={styles.spinner}>
            <Spinner  />
          </Layout>
        ) : (
          <Text style={styles.text}>
            {this.props.status === 'ACTIVE' ? 'Online' : 'Offline'}
          </Text>
        )}
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
  spinner: {
    paddingRight: 15,
  },
  text: {
    margin: 10,
  },
});

const mapStateToProps = (state) => ({
  status: state.route.status,
  isLoading: state.route.statusIsLoading,
});

const mapDispatchToProps = {
  toggleStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusToggle);
