import { combineReducers, createStore, applyMiddleware } from "redux";
import { Items } from "./item";
import { User } from "./user";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      items: Items,
      user: User,
      ...createForms({
        loginForm: {
          username: "",
          password: "",
        },
        itemForm: {
          name: "",
          price: "",
          description: "",
        },
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
