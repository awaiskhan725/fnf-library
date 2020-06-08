import {
  CHANGE_SEARCH_FIELD,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAILED,
} from "./constants";

const initialSearchState = {
  searchField: "",
};

// reducer for updating a search field
export const searchContact = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialDataState = {
  isPending: false,
  data: [],
  error: "",
};

// reducer for updating a data
export const onRequestData = (state = initialDataState, action = {}) => {
  switch (action.type) {
    case REQUEST_DATA_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isPending: false,
      });
    case REQUEST_DATA_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
