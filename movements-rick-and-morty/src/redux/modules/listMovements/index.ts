import { Dispatch } from "redux";

interface RickAndMortyState {
  listMovements: [];
  fetching: boolean;
  success: boolean;
  error: boolean;
  errorMessage: string;
  meta: {};
}

const initialState: RickAndMortyState = {
  listMovements: [],
  fetching: true,
  success: false,
  error: false,
  errorMessage: "",
  meta: {},
};

enum ActionType {
  FETCH_LIST_MOVEMENTS = "modules/listMovements/FETCH_LIST_MOVEMENTS",
  ERROR_LIST_MOVEMENTS = "modules/currencyConverter/ERROR_LIST_MOVEMENTS",
}

interface actionFetchListMovements {
  type: ActionType.FETCH_LIST_MOVEMENTS;
  payload: { info: {}; results: [] };
}

interface actionErrorListMovements {
  type: ActionType.ERROR_LIST_MOVEMENTS;
  payload: string | object;
}

type Action = actionFetchListMovements | actionErrorListMovements;

// Actions
// const FETCH_LIST_MOVEMENTS = "modules/listMovements/FETCH_LIST_MOVEMENTS";
// const ERROR_LIST_MOVEMENTS = "modules/currencyConverter/ERROR_LIST_MOVEMENTS";

// Reducers
export default function reducer(
  state: RickAndMortyState = initialState,
  action: Action
): RickAndMortyState {
  switch (action.type) {
    case ActionType.FETCH_LIST_MOVEMENTS:
      return {
        ...state,
        listMovements: action.payload.results,
        meta: action.payload.info,
        fetching: false,
      };
    case ActionType.ERROR_LIST_MOVEMENTS:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: "Ups! Hubo un error en la API, inténtelo más tarde",
      };
    default:
      return state;
  }
}

// Action Creators
export const fetchListMovements = (payload: { info: {}; results: [] }) => {
  return {
    type: ActionType.FETCH_LIST_MOVEMENTS,
    payload,
  };
};

export const errorListMovements = (payload: string) => {
  return {
    type: ActionType.ERROR_LIST_MOVEMENTS,
    payload,
  };
};

// Thunk
export const fetchListMovementsThunk = () => async (dispatch: Dispatch) => {
  try {
    console.log("FROM API");
    const urlAPI = "https://rickandmortyapi.com/api/character";
    const responseAPI = await fetch(urlAPI);
    const resultAPI = await responseAPI.json();
    if (resultAPI.error) {
      dispatch(errorListMovements(resultAPI?.error));
    } else {
      dispatch(fetchListMovements(resultAPI));
    }
  } catch (err: any) {
    dispatch(errorListMovements(err));
    console.error(err);
  }
};
