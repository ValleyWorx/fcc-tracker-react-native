// This is where authentication actions are created.
import {
    AUTH_LOADING,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS,
    LOG_OUT
} from './types';
import { api } from '../api';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { resetNavigation } from './Helpers';

export const logIn = (loginObject, navigation) => {
    return saveAuth('auth', loginObject, navigation)
};

export const register = (loginObject, navigation) => {
    return saveAuth('user/register', loginObject, navigation)
};

export const saveAuth = (endpoint, loginObject, navigation) => {
    return async (dispatch) => {
        dispatch({type: AUTH_LOADING, payload: true});
        try {
            const response = await api({
                endpoint,
                method: 'POST', 
                skipAuth: true,
                body: loginObject
            });
            console.log('response', response);
            const {jwt, refreshToken} = response;
            await AsyncStorage.setItem('jwt', jwt);
            await AsyncStorage.setItem('refreshToken', refreshToken);
            dispatch({ type: LOG_IN_SUCCESS, payload: response });
            dispatch({ type: AUTH_LOADING, payload: false });
            resetNavigation(navigation, 'Tabs');
        } catch (e) {
            console.log('error', e);
            dispatch({type: LOG_IN_FAIL});
            dispatch({type: AUTH_LOADING, payload: false});
        }
    }
};

export const logOut = (navigation) => {
    return async (dispatch) => {
        await AsyncStorage.clear();
        resetNavigation(navigation, 'LandingScreen');
    }
}
