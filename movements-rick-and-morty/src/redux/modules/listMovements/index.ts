const initialState = {
  listMovements: [],
  fetching: false,
  success: false,
  error: false,
  errorMessage: "",
};

// Actions
const FETCH_LIST_MOVEMENTS = "modules/listMovements/FETCH_LIST_MOVEMENTS";

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_LIST_MOVEMENTS:
      return { ...state, listMovements: action.payload };
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

// Thunk
export const fetchListMovementsThunk = () => async (dispatch) => {
  try {
    console.log("FROM API");
    const urlAPI = "https://rickandmortyapi.com/api/character";
    const responseAPI = await fetch(urlAPI);
    const resultAPI = await responseAPI.json();
    dispatch(fetchListMovements(resultAPI));
  } catch (error) {
    console.log(error);
  }
};
