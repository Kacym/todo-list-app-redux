import React, { useState } from "react";
import { styled } from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: inputValue,
      completed: false,
      id: Math.floor(Math.random() * 100000),
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  return (
    <StyledTodoForm>
      <Input onChange={getInputValue} width="75%" placeholder="add todo" />

      <Button onClick={addNewTodo} width="20%" title="Add" />
    </StyledTodoForm>
  );
};

const StyledTodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 570px;

  border-radius: 12px;
  padding: 20px;
  box-shadow: 1px 1px 1px 1px;
`;

export default TodoForm;
