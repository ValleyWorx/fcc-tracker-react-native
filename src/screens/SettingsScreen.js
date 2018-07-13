import React from 'react';
import {
    View,
    Image,
    StyleSheet
 } from 'react-native';
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
                <Image
                    style={styles.backgroundImage}
                    source={require("../../assets/img/fcc-bg-3.png")}
                />
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        position: "absolute",
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        opacity: 0.3
    },
})

export default connect(null, { logOut })(SettingsScreen);