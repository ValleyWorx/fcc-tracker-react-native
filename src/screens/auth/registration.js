import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         Image,
         TouchableOpacity,
         KeyboardAvoidingView } from 'react-native';
import { Header }  from '../../components/header';
import FccButton from '../../components/fcc-button';

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.newUser = {
      email: 'Email',
      password: 'Password',
      fccCode: 'FCC Code'
     };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>

        <View style={styles.backgroundContainer}>
          <Image style={styles.backgroundImage} source={require('./../../../assets/img/fcc.png')}></Image>

          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior='padding'
            keyboardVerticalOffset={40}
            enabled
            >
            <Text style={styles.text}>Activity Tracker!</Text>
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
            <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.newUser.fccCode}
            />
            <FccButton buttonText={'Sign Up'} />
          </KeyboardAvoidingView>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: 200,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#006400',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5
  },
  text: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 33,
    color: '#006400'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
});
