import {checkTokens} from '../actions/Helpers';

export const apiURL = 'https://api.fcctracker.com/';     //change url to AWS

export const api = async ({endpoint, method, skipAuth, body}) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    
    if (!skipAuth) {
        const jwt = await checkTokens();
        if (jwt) {
            headers['Authorization'] = `Bearer ${jwt}`;
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