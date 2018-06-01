import { checkTokens, resetNavigation } from '../actions/Helpers';

let dipatch = () => {};

export const apiURL = 'https://api.fcctracker.com/';

export const api = async ({endpoint, method, skipAuth, body}) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    
    if (!skipAuth) {
        try {
            const jwt = await checkTokens();
            if (jwt) {
                headers['Authorization'] = `Bearer ${jwt}`;
            }
        } catch(e) {
            resetNavigation({ dispatch }, 'LoginScreen');
            return;
        }
    }

    const response = await fetch(apiURL + endpoint, {
        method,
        headers: headers,
        body: JSON.stringify(body)
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Api Error');
    }
};

export const setupApiNavigation = (dispatchTmp) => {
    dispatch = dispatchTmp;
}