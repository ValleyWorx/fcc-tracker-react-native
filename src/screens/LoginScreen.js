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
    Platform,
    AsyncStorage
} from "react-native";
import Header from "../components/Header";
import FccButton from "../components/fcc-button";
import { FCCSpinner } from "../components/FCCSpinner";
import * as STYLES from '../styles';
import { logIn } from "../actions";

class LogInComponent extends React.Component {
    state = {
        email: "",
        password: "",
    }
    constructor(props) {
        super(props);

        this.vOffset = Platform.OS === "ios" ? 100 : 10; //Size of vertical offset
    }

    onLoginPress = async () => {
        const loginObject = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.logIn(loginObject, this.props.navigation);
    }

    renderButton() {
        if (this.props.loading) {
            return (<FCCSpinner />);
        }
        return (
            <FccButton buttonText={"Log In"} onPress={this.onLoginPress} />
        )
    }

    renderError = () => {
        if (this.props.errorMsg) {
            return (
                <Text style={styles.errorMsg}>{this.props.errorMsg}</Text>
            )
        }
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
                            onChangeText={text => this.setState({ email: text })}
                            placeholder={"Email"}
                            value={this.state.email}
                            underlineColorAndroid={'transparent'}
                        />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => this.setState({ password: text })}
                            placeholder={"Password"}
                            value={this.state.password}
                            secureTextEntry={true}
                            onSubmitEditing={this.onLoginPress}
                            underlineColorAndroid={'transparent'}
                        />
                        <View style={styles.errorContainer}>
                            {this.renderError()}
                        </View>
                        <View style={styles.buttonContainer}>
                            {this.renderButton()}
                        </View>
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
    },
    errorMsg: {
        color: '#a00',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    errorContainer: {
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
    const {loading, errorMsg} = state.auth;
    return {loading, errorMsg};
}

export default connect(mapStateToProps, {logIn})(LogInComponent);