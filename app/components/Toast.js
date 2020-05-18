import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {myTheme} from '../theme';

const Toast = function (props) {
  dismissOverlay = () => {
    Navigation.dismissModal(props.componentId);
  };
  return (
    <View style={styles.root}>
      <View style={styles.toast}>
        <Text style={styles.text}>{props.message.notification.body}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dismissOverlay()}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  toast: {
    elevation: 2,
    flexDirection: 'row',
    height: 40,
    margin: 16,
    borderRadius: 20,
    backgroundColor: myTheme['color-primary-900'],
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    marginRight: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

Toast.options = {
  layout: {
    componentBackgroundColor: 'transparent',
  },
  overlay: {
    interceptTouchOutside: false,
  },
};

const mapStateToProps = (state) => ({
  message: state.messages.currentMessage
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
