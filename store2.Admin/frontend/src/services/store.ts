import { createStore, applyMiddleware, Store, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { State, rootReducer } from '../reducers';
import { Action } from '../actions';
import { rootEpic } from '../epics';

export function initStore(): Store<State, Action> {
    const epicMiddleware = createEpicMiddleware();
    let store: Store<State, Action>;

    if (process.env.NODE_ENV === 'production') {
        store = createStore(
            rootReducer,
            compose(applyMiddleware(epicMiddleware))
        );
    } else {
        store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(epicMiddleware))
        )    
    }

    epicMiddleware.run(rootEpic);

    return store;
}