import React from 'react'
import { styled } from 'styled-components'

const Input = (props) => {
  return (
    <StyledInput onChange={props.onChange} {...props} /> 
  )
}

const StyledInput = styled.input`
    font-size: 20px;
    width: ${(props) => props.width || "80%"};
    height: 40px;
    margin-bottom: 20px;
`
export default Input