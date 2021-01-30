import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import { breeds } from './reducers/breeds';
import { gallery } from './reducers/gallery';


const logger = createLogger({
  timestamp: false,
});

export const rootReducer = combineReducers({
  gallery,
  breeds
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export type RootState = ReturnType<typeof rootReducer>

export default store;
