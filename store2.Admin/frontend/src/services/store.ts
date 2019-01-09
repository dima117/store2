import { createStore, applyMiddleware, Store, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { State, rootReducer } from '../reducers';
import { Action } from '../actions';
import { rootEpic, EpicDeps } from '../epics';

import { MyAPI } from '../api/lib/myAPI';

export function initStore(): Store<State, Action> {
    const client = new MyAPI({ baseUri: 'https://localhost:5001' });

    const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
        dependencies: { client }
    });
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