import { from, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType, combineEpics, ActionsObservable, StateObservable } from 'redux-observable';

import { MyAPI, MyAPIModels } from '../api/lib/myAPI';
import { TEST_REQUEST, TEST_DECREMENT, Action, testResponse, testResponseError } from '../actions';
import { State } from '../reducers';

const testEpic = (action$: ActionsObservable<Action>, state$: StateObservable<State>)  => action$.pipe(
    ofType(TEST_REQUEST),
    mergeMap((a: Action) => {
        console.log(state$.value);
        const client = new MyAPI({ baseUri: 'https://localhost:5001' });
        return from(client.doStuff()).pipe(
            map((items: MyAPIModels.DoStuffResponse) => testResponse(items)),
            catchError((err: Error) => of(testResponseError(err.message)))
        );           
    })
);

export const rootEpic = combineEpics(testEpic);