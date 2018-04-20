import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header } from '../../components/header';

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.newUser = {
      email: 'Email',
      password: 'Password'
     };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Text>FCC Tracker!</Text>

        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.newUser.email}
        />
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.newUser.password}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
  }
});
