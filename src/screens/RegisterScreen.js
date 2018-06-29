import React from "react";
import { connect } from 'react-redux';
import { register } from "../actions";
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


class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      fccCode: ""
    };
    this.vOffset = Platform.OS === "ios" ? 100 : 10; //Size of vertical offset
  }
	
  onLoginPress = async () => {
    const loginObject = {
        fname: this.state.fname, 
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password,
        fccCode: this.state.fccCode
    }
    this.props.register(loginObject, this.props.navigation);
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
              value={this.state.fname}
              placeholder={"First Name"}
              underlineColorAndroid={'transparent'}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.lname}
              placeholder={"Last Name"}
              underlineColorAndroid={'transparent'}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.email}
              placeholder={"Email"}
              underlineColorAndroid={'transparent'}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"Password"}
              underlineColorAndroid={'transparent'}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.fccCode}
              placeholder={"FCC Code"}
              underlineColorAndroid={'transparent'}
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

const mapStateToProps = state => {
  const {loading, errorMsg} = state.auth;
  return {loading, errorMsg};
}

export default connect(mapStateToProps, {register})(RegisterScreen);
