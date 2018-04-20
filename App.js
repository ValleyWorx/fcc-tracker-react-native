import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Registration } from './src/screens/auth/registration'

export default class App extends React.Component {
  render() {
    return ([
      <View style={styles.container}>
        <Text>TEST!</Text>
      </View>,
      <Registration></Registration>
    ]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
