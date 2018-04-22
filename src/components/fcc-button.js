//imprort libraries for making a component
import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';

//make a component
const FccButton = (props) => {
    const { signUpButton, linearGradient } = styles;

    onPress = () => {
      Alert.alert('Button Clicked!');
    }

    return (
      <TouchableOpacity style={signUpButton} onPress={this.onPress}>
        <LinearGradient colors={['#ffcc4d', '#ec8b11']} style={linearGradient}>
          <Text>
            {props.buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
};

const styles = {
  signUpButton: {
    //backgroundColor: '#FF9C2A',
    marginTop: 10,
    borderColor: '#006400',
    borderWidth: 1,
    borderRadius: 5
  },
  linearGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  }
};

export default FccButton;
