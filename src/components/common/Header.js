// Import libraries for making a Component
import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../../styles';

// Make a component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.leftViewStyle}>
        <TouchableOpacity style={styles.leftTouchable} onPress={props.leftPress}>
          <Text style={styles.leftTextStyle}>{props.leftText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerViewStyle}>
        <Text style={styles.centerTextStyle}>{props.centerText}</Text>
      </View>
      <View style={styles.rightViewStyle}>
        <TouchableOpacity style={styles.rightTouchable} onPress={props.rightPress}>
          <Text style={styles.rightTextStyle}>{props.rightText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: (Platform.OS === 'android') ? '12%' : '10%',
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginBottom: 10,
    paddingTop: (Platform.OS === 'android') ? 20 : 0,
  },
  leftTouchable: {
    width: '100%',
  },
  rightTouchable: {
    width: '100%',
    alignItems: 'center',
  },
  leftViewStyle: {
    flex: 0.20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftTextStyle: {
    color: MAIN_COLOR,
    fontSize: 18,
    paddingTop: 18,
    paddingLeft: 15,
  },
  centerViewStyle: {
    flex: 0.60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTextStyle: {
    fontSize: 20,
    paddingTop: 15,
    fontWeight: 'bold'
  },
  rightViewStyle: {
    flex: 0.20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightTextStyle: {
    color: MAIN_COLOR,
    fontSize: 18,
    paddingTop: 18,
    paddingRight: 15,
  }
};

// Make the component available to other parts of the app
export { Header };
