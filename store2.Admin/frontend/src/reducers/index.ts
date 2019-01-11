import { combineReducers, Reducer } from 'redux';
import { Action, TEST_INCREMENT, TEST_DECREMENT, TEST_REQUEST, TEST_RESPONSE, TEST_RESPONSE_ERROR } from '../actions';
import { MyAPIModels } from '../api/lib/myAPI';

export interface Page1State {
    count: number;
}

export interface Page2State {
    pages: MyAPIModels.PageListItemDto[];
    error?: string;
}

export interface State {
    page1: Page1State;    
    page2: Page2State;    
}

function page1(state: Page1State = { count: 0 }, action: Action): Page1State {
    switch(action.type) {
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
    switch(action.type) {
        case TEST_REQUEST:
            return {
                pages: [],
                error: undefined
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

export const rootReducer: Reducer<State, Action> = combineReducers({ 
    page1, page2
});
