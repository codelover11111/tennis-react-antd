import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";

const initialState = {};

const middlewares = [thunk];

const middleWares =
  !process.env.NODE_ENV === "production"
    ? !process.env.REACT_APP_BRANCH_URL === "prod"
      ? compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : compose(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

export const Store = createStore(RootReducer, initialState, middleWares);
export default Store;
