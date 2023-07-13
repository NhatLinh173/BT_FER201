import ITEMS from "../data/items";
import * as ActionTypes from "./actionType";
export const Items = (state = { items: ITEMS }, action) => {
  switch (action.type) {
    case ActionTypes.ITEM_EDIT:
      const temp = [...state.items];

      temp[state.items.findIndex((item) => item.id == action.payload.id)] =
        action.payload;
      return {
        ...state,
        items: temp,
      };
    case ActionTypes.ITEM_DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item != action.payload),
      };

    default:
      return state;
  }
};
