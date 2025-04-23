import { combineReducers, Reducer } from 'redux';

import { AppStateFeatureKeysEnum } from './feature-keys.enums';
import CounterReducer from './counter/counter.reducer';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

export interface AsyncReducers {
    [key: string]: Reducer;
}

const staticReducers = {
    [AppStateFeatureKeysEnum.Counter]: CounterReducer,
};

const rootReducer = combineReducers({
    ...staticReducers,
});;

export default rootReducer;
