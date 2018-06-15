import React from "react";
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
} from "react-native";
import Header from "../components/Header";
import FccButton from "../components/fcc-button";
import * as STYLES from '../styles';
import { logIn } from "../actions";

class LandingScreen extends React.Component {
    state = {
        email: "",
        password: "",
    }
    constructor(props) {
        super(props);

        this.vOffset = Platform.OS === "ios" ? 100 : 10; //Size of vertical offset
    }

    onSignUpPress = () => {
        this.props.navigation.navigate('SignUpScreen');
    }

    onLoginPress = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    renderSignUp() {
        return (
            <FccButton buttonText={"Sign Up"} onPress={this.onSignUpPress} />
        )
    }

    renderLogIn() {
        return (
            <FccButton buttonText={"Log In"} onPress={this.onLoginPress} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={require("../../assets/img/fcc.png")}
                />
                <Header
                    centerType={'logo'}
                />
                <View style={styles.backgroundContainer}>
                    <Text style={styles.text}>{'Welcome\nto the\nfreeCodeCamp\n Activity Tracker!'}</Text>
                    <View style={styles.buttonContainer}>
                        {this.renderSignUp()}
                        {this.renderLogIn()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: STYLES.CONTAINER_STYLE,
    backgroundContainer: {
        flex: 1,
        justifyContent: 'space-around'
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
        color: "#006400",
        textAlign: "center"
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
    const {user, loading, errorMsg} = state.auth;
    return {user, loading, errorMsg};
}

export default connect(mapStateToProps, {logIn})(LandingScreen);