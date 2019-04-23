import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { combineEpics, ActionsObservable, StateObservable } from 'redux-observable';

import { MyAPI, MyAPIModels } from '../api/lib/myAPI';
import { Action, testResponse, testResponseError } from '../actions';
import { State } from '../reducers';

import { LOCATION_CHANGED } from 'tmp-react-router';

export interface EpicDeps {
    client: MyAPI;
}

const testEpic = (action$: ActionsObservable<Action>, state$: StateObservable<State>, deps: EpicDeps)  => action$.pipe(
    filter(action => action.type === LOCATION_CHANGED && action.location.key === 'PAGE2'),
    mergeMap(() => {
        console.log(state$.value);

        return from(deps.client.getPages()).pipe(
            map((items: MyAPIModels.GetPagesResponse) => testResponse(items)),
            catchError((err: Error) => of(testResponseError(err.message)))
        );           
    })
);

export const rootEpic = combineEpics(testEpic);
