import React from "react";
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Header from "../components/header";
import FccButton from "../components/fcc-button";
import * as STYLES from '../styles';
import { api } from "../api";
import { logInSuccess } from "../actions/AuthActions";

@connect() 
export default class Registration extends React.Component {
    state = {
        email: "",
        password: "",
    }
    newUser = {
        email: "Email",
        password: "Password"
    };
    constructor(props) {
        super(props);

        this.vOffset = Platform.OS === "ios" ? 100 : 10; //Size of vertical offset
    }

    onLoginPress = async () => {
        const response = await api({
            endpoint: 'auth',
            method: 'POST', 
            body: {
                email: this.state.email,
                password: this.state.password,
            }
        });

        this.props.dispatch(logInSuccess(response));
        
        this.props.navigation.navigate('Tabs');
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
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
                            onChangeText={text => this.setState({ email: text })}
                            placeholder={this.newUser.email}
                            value={this.state.email}
                        />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => this.setState({ password: text })}
                            placeholder={this.newUser.password}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                        <FccButton buttonText={"Log In"} onPress={this.onLoginPress} />
                        <Text>{this.state.jwt}</Text>
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
