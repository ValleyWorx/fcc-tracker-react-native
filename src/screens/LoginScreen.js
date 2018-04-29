import React from 'react';
import { connect } from 'react-redux';

import Registration from './auth/registration';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import { Button } from '../components/common';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleLoginPress() {

    }

    render() {
        return (
            <Registration>

            </Registration>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 22,
        backgroundColor: '#fff',
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: "3%"
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    textInputTitle: {
        fontSize: 18,
        marginVertical: 5,
        fontWeight: '400',
        alignSelf: 'flex-start',
    },
    textInputStyle: {
        height: 38,
        width: '100%',
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
        padding: 5,
    },
    errorMsg: {
        color: '#a00',
        fontSize: 18,
    }
})

const mapStateToProps = state => {
    const { loading, errorMsg } = state.auth;

    return { loading, errorMsg };
}

export default connect(mapStateToProps)(LoginScreen);