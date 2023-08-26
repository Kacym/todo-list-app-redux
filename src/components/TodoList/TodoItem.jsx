import React from "react";
import Button from "../UI/Button";
import { styled } from "styled-components";
import Input from "../UI/Input";

const TodoItem = ({ removeTodoHandler, todo }) => {
  return (
    <StyledTodoItem>
      <h2>{todo.title}</h2>
      <TodoSettings>
        <Input type="checkbox" />
        <Button width="60%" title="remove" onClick={() => removeTodoHandler(todo.id)} />
      </TodoSettings>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  background-color: aqua;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 25px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* border: solid; */
`;

const TodoSettings = styled.div`
  display: flex;
  width: 50%;
`;

export default TodoItem;
