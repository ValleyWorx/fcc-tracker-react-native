import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Registration } from './src/screens/auth/registration';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#006400'}}>
      <View style={styles.container}>
        <Registration></Registration>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
