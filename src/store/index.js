import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../store/auth.slicer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;

/*import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
*/
