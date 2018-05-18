// This is where authentication actions are created.
import {
    AUTH_LOADING,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS,
    LOG_OUT
} from './types';
import { api } from '../api';
import { NavigationActions } from 'react-navigation';
import {AsyncStorage} from 'react-native';

export const logIn = (loginObject, navigation) => {
    return async (dispatch) => {
        dispatch({type: AUTH_LOADING, payload: true});
        const {email, password} = loginObject;
        try {
            const response = await api({
                endpoint: 'auth',
                method: 'POST', 
                skipAuth: true,
                body: {
                    email: email,
                    password: password,
                }
            });
            const {jwt, refreshToken} = response;
            await AsyncStorage.setItem('jwt', jwt);
            await AsyncStorage.setItem('refreshToken', refreshToken);
            dispatch({type: LOG_IN_SUCCESS, payload: response});
            dispatch({type: AUTH_LOADING, payload: false});
            navigation.navigate('HomeScreen');
        } catch(e) {
            dispatch({type: LOG_IN_FAIL});
            dispatch({type: AUTH_LOADING, payload: false});
        }
    }
};

export const scrape = () => {
    return async (dispatch) => {
        const response = await api({
            endpoint: 'user/scrape',
            method: 'GET',
        });
        console.log('scrape results: ', response);
    }
}