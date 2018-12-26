import { TEST_REQUEST, Action, testResponse } from '../actions';
import { map } from 'rxjs/operators';
import { ofType, combineEpics, ActionsObservable } from 'redux-observable';

const testEpic = (action$: ActionsObservable<Action>)  => action$.pipe(
    ofType(TEST_REQUEST),
    map((a: Action) => {
        return testResponse();
    })
);

export const rootEpic = combineEpics(testEpic);