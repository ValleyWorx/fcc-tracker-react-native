import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ScrapeReducer from './ScrapeReducer';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        auth: AuthReducer,
        scrape: ScrapeReducer
    })
}