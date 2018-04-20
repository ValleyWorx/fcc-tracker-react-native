import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export class Registration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TEST!</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={"test"}
        />
      </View>
    );
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
