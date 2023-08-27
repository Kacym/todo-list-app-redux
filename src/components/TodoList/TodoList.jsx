import React from "react";
import TodoForm from "./TodoForm";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { styled } from "styled-components";

const TodoList = () => {
  const dispatch = useDispatch();

  const { todos = [] } = useSelector((state) => state.todos);

  const removeTodoHandler = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const onCompletedHandler = (todoId) => {
    dispatch({ type: "COMPLETED_TODO", payload: todoId })
  };
  
  return (
    <div>
      <TodoForm />
      <StyledTodoList>
        {todos.map((todo) => (
          <TodoItem
            removeTodoHandler={removeTodoHandler}
            onCompleted={onCompletedHandler}
            {...todo}
            key={todo.id}
            todo={todo}
          />
        ))}
      </StyledTodoList>
    </div>
  );
};

const StyledTodoList = styled.ul`
  background-color: red;
`;

export default TodoList;
