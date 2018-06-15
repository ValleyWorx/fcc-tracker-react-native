import React from 'react';
import Expo from 'expo';
import { AsyncStorage } from 'react-native';
import { resetNavigation } from '../actions/Helpers';

class LoadingScreen extends React.Component {
    async componentDidMount() {
        const jwt = await AsyncStorage.getItem('jwt');
        if (jwt) {
            resetNavigation(this.props.navigation, 'Tabs');
        } else {
            resetNavigation(this.props.navigation, 'LandingScreen');
        }
    }

    render() {
        return (
            <Expo.AppLoading />
        )
    }
}

export default LoadingScreen;