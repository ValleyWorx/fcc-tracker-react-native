import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from './reducers';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancers = composeEnhancers(
  applyMiddleware(thunk)
);

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        storeEnhancers
    )

    return store;
}