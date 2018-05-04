import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import * as STYLES from '../styles';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
    LoginScreen: {
        screen: LoginScreen,
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