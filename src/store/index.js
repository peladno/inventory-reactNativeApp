import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD

import authReducer from '../store/auth.slicer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;

/*import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
=======
>>>>>>> reduxtoolkit-test

import authReducer from './auth.slicer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
<<<<<<< HEAD

export default createStore(rootReducer, applyMiddleware(thunk));
*/
=======
>>>>>>> reduxtoolkit-test
