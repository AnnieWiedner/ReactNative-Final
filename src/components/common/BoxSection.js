import React from 'react';
import { View } from 'react-native';

const BoxSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'rgba(0, 0, 0, 0)',
    position: 'relative',
  }
};

export { BoxSection };
