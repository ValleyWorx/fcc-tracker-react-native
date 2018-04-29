import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

export const Routes = {
    LoginScreen: {
        screen: LoginScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
        }
    }
}