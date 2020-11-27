import {combineReducers} from '@reduxjs/toolkit';
import entitiesReducer from './entities';
import { loadingBarReducer } from 'react-redux-loading-bar'
export default combineReducers({
    entities: entitiesReducer,
    loadingBar : loadingBarReducer
});