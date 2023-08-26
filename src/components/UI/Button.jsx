import React from 'react'
import { styled } from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick} {...props}>{props.title}</StyledButton>
  )
}

const StyledButton = styled.button`
    width: ${(props) => props.width || "40%"};
    height: 40px;
`
export default Button