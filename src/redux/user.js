import * as ActionTypes from "./actionType";
export const User = (state = { user: null }, action) => {
  switch (action.type) {
    case ActionTypes.USER_ADD:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.USER_REMOVE:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
