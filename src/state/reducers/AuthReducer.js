import {
    AUTH_LOADING,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS,
} from '../../actions/types';

const initialState = {
    errorMsg: '',
    user: {},
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return { ...state, loading: action.payload }
        case LOG_IN_SUCCESS:
            return { ...state, user: action.payload }
        case LOG_IN_FAIL:
            return { ...state, errorMsg: 'Login failed, please try again.' }
        default:
            return state;
    }
}