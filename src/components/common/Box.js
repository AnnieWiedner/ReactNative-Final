import React from 'react';
import { View } from 'react-native';

const Box = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: -30,
    flex: 1,
    justifyContent: 'center'
  }
};

export { Box };
