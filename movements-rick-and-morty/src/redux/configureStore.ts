import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import reducer from "./modules/listMovements/index";
import listMovementsRickAndMorty from "./modules/listMovements/index";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers = compose(applyMiddleware(thunk), devTools) || compose;

const rootReducer = () =>
  combineReducers({
    movements: listMovementsRickAndMorty,
  });

export default function configureStore() {
  const store = createStore(rootReducer(), composeEnhancers);

  return store;
}
