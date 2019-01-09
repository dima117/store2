import { from, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType, combineEpics, ActionsObservable, StateObservable } from 'redux-observable';

import { MyAPI, MyAPIModels } from '../api/lib/myAPI';
import { TEST_REQUEST, Action, testResponse, testResponseError } from '../actions';
import { State } from '../reducers';

export interface EpicDeps {
    client: MyAPI;
}

const testEpic = (action$: ActionsObservable<Action>, state$: StateObservable<State>, deps: EpicDeps)  => action$.pipe(
    ofType(TEST_REQUEST),
    mergeMap((a: Action) => {
        console.log(state$.value);

        return from(deps.client.doStuff()).pipe(
            map((items: MyAPIModels.DoStuffResponse) => testResponse(items)),
            catchError((err: Error) => of(testResponseError(err.message)))
        );           
    })
);

export const rootEpic = combineEpics(testEpic);