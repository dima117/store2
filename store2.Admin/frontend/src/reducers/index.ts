import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import {
    RouterConfig,
    RouterLocation,
    LOCATION_CHANGED,
    createRoutingReducer
} from 'tmp-react-router';

import {
    Action,
    TEST_INCREMENT,
    TEST_DECREMENT,
    TEST_RESPONSE,
    TEST_RESPONSE_ERROR
} from '../actions';
import { MyAPIModels } from '../api/lib/myAPI';

export interface Page1State {
    count: number;
}

export interface Page2State {
    pages: MyAPIModels.PageListItemDto[];
    error?: string;
}

export interface State {
    location: RouterLocation;
    page1: Page1State;
    page2: Page2State;
}

function page1(state: Page1State = { count: 0 }, action: Action): Page1State {
    switch (action.type) {
        case TEST_INCREMENT:
            return {
                count: state.count + action.count
            };
        case TEST_DECREMENT:
            return {
                count: state.count - action.count
            };
        default:
            return state;
    }
}

function page2(state: Page2State = { pages: [] }, action: Action): Page2State {
    switch (action.type) {
        case LOCATION_CHANGED:
            return {
                pages: []
            };
        case TEST_RESPONSE:
            return {
                pages: action.pages
            };
        case TEST_RESPONSE_ERROR:
            return {
                pages: [],
                error: action.msg
            };
        default:
            return state;
    }
}

export const createRootReducer = (
    config: RouterConfig,
    history: History
): Reducer<State, Action> =>
    combineReducers({
        location: createRoutingReducer(config, history),
        page1,
        page2
    });
