import {
    ATTEMPT_LOG_IN,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS
} from '../../actions/types';

const initialState = {
    jwt: '',
    fname: '',
    lname: '',
    refreshToken: '',
    errorMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ATTEMPT_LOG_IN:
            return { ...state, loading: true }
        case LOG_IN_SUCCESS:
            return { ...state, jwt: action.jwt, fname: action.fname, lname: action.lname, refreshToken: action.refreshToken}
        case LOG_IN_FAIL:
            return { ...state, ...initialState, errorMsg: 'Login failed, please try again.' }
        default:
            return state;
    }
}