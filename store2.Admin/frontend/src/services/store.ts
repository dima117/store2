import { createStore, applyMiddleware, Store, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { State, createRootReducer } from '../reducers';
import { Action } from '../actions';
import { createRoutingMiddleware } from 'tmp-react-router';
import { rootEpic, EpicDeps } from '../epics';

import { createBrowserHistory } from 'history';

import { MyAPI } from '../api/lib/myAPI';

export function initStore(): Store<State, Action> {
    const client = new MyAPI({ baseUri: 'https://localhost:5001' });

    const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
        dependencies: { client }
    });

    const history = createBrowserHistory();
    const routerConfig = {
        routes: {
            PAGE1: '/p1/:login',
            PAGE2: '/p2'
        }
    };

    const routerMiddleware = createRoutingMiddleware(routerConfig, history);
    const rootReducer = createRootReducer(routerConfig, history);

    let store: Store<State, Action>;

    if (process.env.NODE_ENV === 'production') {
        store = createStore(
            rootReducer,
            compose(applyMiddleware(routerMiddleware, epicMiddleware))
        );
    } else {
        store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(routerMiddleware, epicMiddleware))
        )    
    }

    epicMiddleware.run(rootEpic);

    return store;
}