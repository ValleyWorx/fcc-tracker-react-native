import {
    ATTEMPT_LOG_IN,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS
} from '../../actions/types';

const initialState = {
    user: {},
    errorMsg: '',
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ATTEMPT_LOG_IN:
            return { ...state, loading: true }
        case LOG_IN_SUCCESS:
            return { ...state, ...initialState, user: action.payload }
        case LOG_IN_FAIL:
            return { ...state, ...initialState, errorMsg: 'Login failed, please try again.' }
        default:
            return state;
    }
}