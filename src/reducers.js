/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';
//import {reducer as globalReducer} from './containers/App/';

import {reducer as languageProviderReducer} from './containers/LanguageProvider/slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
    console.log("Inject Reducers=>\n", injectedReducers);
    return combineReducers({
        language: languageProviderReducer,
        router: connectRouter(history),
        ...injectedReducers,
    });
}
