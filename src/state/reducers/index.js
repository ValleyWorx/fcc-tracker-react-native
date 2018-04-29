import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        auth: AuthReducer,
    })
}