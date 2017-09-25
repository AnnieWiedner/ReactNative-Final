import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Link = ({ onPress, children }) => {
  const { linkStyle , textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={linkStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  linkStyle: {
    flex: 1,
    marginRight: 100,
    marginLeft: 100,
    alignSelf: 'center',
  }
};

export { Link };
