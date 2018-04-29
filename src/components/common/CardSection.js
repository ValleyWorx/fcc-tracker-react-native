import React from 'react';
import { View } from 'react-native';

// Is a section of a card, meant to be used with the Card component.
const CardSection = (props) => {
  return (
    // turning the style object into an array makes it so that it uses the first position of the 
    // array as the default style, but anything that comes after it overrides previous styles
    <View style={[style.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    // centers vertically
    justifyContent: 'space-around',
    // sets the direction of the content to be horizontal
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
