import * as ActionType from "./actionType";
export const addUser = (user) => ({
  type: ActionType.USER_ADD,
  payload: user,
});
export const removeUser = () => ({
  type: ActionType.USER_REMOVE,
});
export const removeItem = (item) => ({
  type: ActionType.ITEM_DELETE,
  payload: item,
});
export const editItem = (item) => ({
  type: ActionType.ITEM_EDIT,
  payload: item,
});
