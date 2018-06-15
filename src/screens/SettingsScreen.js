import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as STYLES from '../styles';
import FccButton from "../components/fcc-button";
import Header from '../components/Header';
import { connect } from 'react-redux';
import { logOut } from '../actions';

class SettingsScreen extends React.Component {
    onLogoutPress = () => {
        this.props.logOut(this.props.navigation);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerType={'text'}
                    centerText={'Settings'}
                />
                <View style={styles.buttonContainer}>
                <FccButton
                    buttonText={"Log Out"}
                    onPress={this.onLogoutPress}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: STYLES.CONTAINER_STYLE,
    buttonContainer: {
        alignItems: 'center',
    },
})

export default connect(null, { logOut })(SettingsScreen);