const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
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