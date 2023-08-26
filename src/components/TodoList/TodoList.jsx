import React from 'react'
import TodoForm from './TodoForm'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { styled } from 'styled-components'

const TodoList = () => {
  const dispatch = useDispatch();

  const { todos = [] } = useSelector((todo) => {
    return todo
  })

  const removeTodoHandler = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id })
  }

  return (
    <div>
      <TodoForm/>
      <StyledTodoList>
        {
          todos.map((todo) => (
            <TodoItem removeTodoHandler={removeTodoHandler} key={todo.id} todo={todo}/>
          ))
        }
      </StyledTodoList>
    </div>
  )
}

const StyledTodoList = styled.ul`
  background-color: red;

`

export default TodoList