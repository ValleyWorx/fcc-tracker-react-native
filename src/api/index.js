import {checkTokens} from '../actions/Helpers';

export const apiURL = 'https://api.fcctracker.com/';     //change url to AWS

export const api = ({endpoint, method, body}) => {
    return checkTokens().then(async jwt => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (jwt) {
            headers['Authorization'] = `Bearer ${jwt}`;
        }
        const response = await fetch(apiURL + endpoint, {
            method,
            headers: headers,
            body: JSON.stringify(body)
        });
        return response;
    })

};