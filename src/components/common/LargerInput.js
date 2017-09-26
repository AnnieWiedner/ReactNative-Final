import React from 'react';
import { TextInput, View, Text } from 'react-native';

const LargerInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        multiline={true}
        textAlignVertical={'top'}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 30,
    height: 80,
    flex: 1,
  },
  containerStyle: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
};

export { LargerInput };
