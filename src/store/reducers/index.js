import { combineReducers } from "redux";
import { todoReducer } from "./todo-reducer";
import { authReducer } from "./auth-reducer";

export const rootReducer = combineReducers({
    todos: todoReducer,
    auth: authReducer
})