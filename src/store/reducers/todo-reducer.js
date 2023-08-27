const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    }
    case "COMPLETED_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed, 
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    }
    default: {
        return state
    }
  }
};
