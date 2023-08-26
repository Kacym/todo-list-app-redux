import { createStore } from "redux";


const todoInitialState = {
    todos: []
}

const authInitialState = {
    password: "",
    emai: ""
}

const authReducerFn = (state = authInitialState, action) => {
    switch(action.type) {
        case "PASSWORD_VALUE": {
            return {
                ...state,
                password: action.payload
            }
        }
    }
    return state
}

const todoReducerFn = (state = todoInitialState, action) => {
    switch(action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case "REMOVE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export const todoStore = createStore(todoReducerFn);
export const authStore = createStore(authReducerFn);