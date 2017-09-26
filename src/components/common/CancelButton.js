import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CancelButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ff00bf',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff00bf',
    marginLeft: 5,
    marginRight: 5
  }
};

export { CancelButton };
