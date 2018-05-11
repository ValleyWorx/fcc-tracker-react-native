// This is where authentication actions are created.

import {
    ATTEMPT_LOG_IN,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS,
    LOG_OUT
} from './types';

export function logInSuccess ({jwt, fname, lname, refreshToken, role}) {
    return {
        type: LOG_IN_SUCCESS,
        jwt,
        fname,
        lname,
        refreshToken,
        role
    }
};