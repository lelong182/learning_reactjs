import * as types from "./constants";

const INITIAL_STATE = {
  list: {
    response: [],
    paging: {total: 0, limit: 0, page: 0},
    error: null,
    loading: false
  }
};

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        list: {
          response: [],
          paging: {total: 0, limit: 0, page: 0},
          error: null,
          loading: true
        }
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        list: {
          response: action.payload.data.records,
          paging: action.payload.data.paging,
          error: null,
          loading: false
        }
      };
    case types.FETCH_USERS_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return {
        ...state,
        list: {
          response: [],
          paging: {total: 0, limit: 0, page: 0},
          error: error,
          loading: false
        }
      };
    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        list: {
          response: [action.payload.data.records, ...state.list.response],
          error: null,
          loading: false
        }
      };
    case types.DELETE_USER_SUCCESS:
      const records = state.list.response.filter((res) => res.id !== action.meta.id);
      return {
        ...state,
        list: {
          response: records,
          error: null,
          loading: false
        }
      };
    default:
      return state;
  }
}