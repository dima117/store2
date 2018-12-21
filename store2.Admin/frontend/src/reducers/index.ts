import { combineReducers, Reducer } from 'redux';
import { Action, TEST_INCREMENT, TEST_DECREMENT } from '../actions';

export interface Page1State {
    count: number;
}

export interface State {
    page1: Page1State;    
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

export const rootReducer: Reducer<State, Action> = combineReducers({ 
    page1
});
