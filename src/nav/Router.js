import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import * as STYLES from '../styles';

import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from '../screens/RegisterScreen';

const Tabs = TabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
            tabBarIcon: ({ tintColor }) =>
                <Icon
                    name={'home'}
                    type={'material-community'}
                    color={tintColor}
                    size={25}
                />
        }
    },
    SettingsScreen: {
        screen: SettingsScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
            tabBarIcon: ({ tintColor }) =>
                <Icon
                    name={'settings'}
                    type={'material-community'}
                    color={tintColor}
                    size={25}
                />
        }
    }
}, {
        initialRouteName: 'HomeScreen',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#FFF',
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: STYLES.MAIN_COLOR,
                borderTopWidth: 0.5,
                borderColor: STYLES.MAIN_COLOR,
            },
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
        },
})

export const Routes = {
    LoadingScreen: {
        screen: LoadingScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
        }
    },
    LandingScreen: {
        screen: LandingScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
        }
    },
    SignUpScreen: {
        screen: SignUpScreen,
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
        }
    },
    Tabs: {
        screen: Tabs,
    }
}