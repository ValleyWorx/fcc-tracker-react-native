import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import Header from "../components/Header";
import FccButton from "../components/fcc-button";
import * as STYLES from '../styles';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.newUser = {
      email: "Email",
      password: "Password",
      fccCode: "FCC Code"
    };
    this.vOffset = Platform.OS === "ios" ? 100 : 10; //Size of vertical offset
  }
	
	onLoginPress = () => {
		this.props.navigation.navigate('Tabs');
	}

  render() {
    return (
      <View style={styles.container}>
			<Header
        leftType={'back'}
        centerType={'logo'}
			/>

        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={require("../../assets/img/fcc.png")}
          />
          {/* Could wrap in scroll View */}
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior="padding"
            keyboardVerticalOffset={this.vOffset} // Gets computed when changes props or state
            enabled
          >
            <Text style={styles.text}>Activity Tracker!</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.newUser.email}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.newUser.password}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.newUser.fccCode}
            />
            <FccButton buttonText={"Sign Up"} onPress={this.onLoginPress} />
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: STYLES.CONTAINER_STYLE,
  backgroundContainer: {
    flex: 1
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: 200,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#006400",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5
  },
  text: {
    marginBottom: 50,
    fontWeight: "bold",
    fontSize: 33,
    color: "#006400"
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  }
});
