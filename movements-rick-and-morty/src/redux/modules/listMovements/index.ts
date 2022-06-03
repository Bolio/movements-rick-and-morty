const initialState = {
  listMovements: [],
  fetching: true,
  success: false,
  error: false,
  errorMessage: "",
  meta: {},
};

// Actions
const FETCH_LIST_MOVEMENTS = "modules/listMovements/FETCH_LIST_MOVEMENTS";
const ERROR_LIST_MOVEMENTS = "modules/currencyConverter/ERROR_LIST_MOVEMENTS";

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_LIST_MOVEMENTS:
      return {
        ...state,
        listMovements: action.payload.results,
        meta: action.payload.info,
        fetching: false,
      };
    case ERROR_LIST_MOVEMENTS:
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
export const fetchListMovements = (payload) => {
  return {
    type: FETCH_LIST_MOVEMENTS,
    payload,
  };
};

export const errorListMovements = (payload) => {
  return {
    type: ERROR_LIST_MOVEMENTS,
    payload,
  };
};

// Thunk
export const fetchListMovementsThunk = () => async (dispatch) => {
  try {
    console.log("FROM API");
    const urlAPI = "https://rickandmortyapi.com/api/character";
    const responseAPI = await fetch(urlAPI);
    const resultAPI = await responseAPI.json();
    if (resultAPI.error) {
      dispatch(errorListMovements(resultAPI.error));
    } else {
      dispatch(fetchListMovements(resultAPI));
    }
  } catch (error) {
    dispatch(errorListMovements(error));
    console.log(error);
  }
};
