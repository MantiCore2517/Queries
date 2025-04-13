import { applyMiddleware, compose, legacy_createStore, combineReducers } from "redux";
import { todosReducer, messagesReducer, searchReducer, appReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
	todos: todosReducer,
	messages: messagesReducer,
	search: searchReducer,
	app: appReducer,
});

const composeEnhancers =
	(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = legacy_createStore(reducer, enhancer);
