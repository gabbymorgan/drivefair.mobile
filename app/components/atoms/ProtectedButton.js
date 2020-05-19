import React, {useState, useRef} from 'react';
import { StyleSheet, Animated} from 'react-native';
import {myTheme} from '../../theme';
import {Button, Spinner} from '@ui-kitten/components';

const AnimatedButton = Animated.createAnimatedComponent(Button);

export default function ProtectedButton(props) {
  const CANCEL_PRESS_LENGTH = 1000;
  const [cancelPressStartTime, setCancelPressStartTime] = useState(null);
  const [buttonContent, setButtonContent] = useState(props.initialContent);
  const beginCancelPress = () => {
    setCancelPressStartTime(Date.now());
    setButtonContent(props.pressProgressContent);
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: CANCEL_PRESS_LENGTH,
    }).start(({finished}) => {
      if (finished) {
        setButtonContent(props.pressCompletedContent);
      }
    });
  };
  const endCancelPress = () => {
    if (cancelPressStartTime + CANCEL_PRESS_LENGTH < Date.now()) {
      props.action();
    }
    setButtonContent(props.initialContent);
    setCancelPressStartTime(null);
    fadeAnim.setValue(0.4);
  };
  const fadeAnim = useRef(new Animated.Value(0.4)).current;

  return (
    <AnimatedButton
      style={[
        styles.buttonDouble,
        {
          opacity: cancelPressStartTime ? fadeAnim : 1,
        },
      ]}
      status="danger"
      onPressIn={() => beginCancelPress()}
      onPressOut={() => endCancelPress()}>
      {buttonContent}
    </AnimatedButton>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    marginRight: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonDouble: {
    width: '40%',
    marginHorizontal: '5%',
  },
  buttonSingle: {},
});
