import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import entities from './entities';
import api from "./middleware/api";

export default configureStore({
    reducer: {
        entities: entities,
    },
    middleware: [
        ...getDefaultMiddleware(),
        api
    ]
});