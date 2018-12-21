import { createStore, Store } from 'redux';

import { State, rootReducer } from '../reducers';

export function initStore(): Store<State> {
    return createStore(rootReducer);
}