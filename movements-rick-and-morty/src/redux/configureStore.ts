import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers = compose(applyMiddleware(thunk), devTools) || compose;

const rootReducer = () =>
  combineReducers({
    movements: listMovements,
  });

export default function configureStore() {
  const store = createStore(rootReducer(), composeEnhancers);

  return store;
}
