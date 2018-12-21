import { createStore, Store, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { State, rootReducer } from '../reducers';
import { Action } from '../actions';

export function initStore(): Store<State, Action> {
    if (process.env.NODE_ENV === 'production') {
        return createStore(
            rootReducer,
            compose()
        );
    }

    return createStore(
        rootReducer,
        composeWithDevTools()
    );
}