import {configureStore} from '@reduxjs/toolkit';
import entities from './entities';

export default configureStore({
    reducer: {
        entities: entities,
    },
});

/*
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

 */
