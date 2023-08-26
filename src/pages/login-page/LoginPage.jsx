import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const dispatch = useDispatch();

    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [emailInputValue, setEmailInputValue] = useState("");

    const getPasswordInputValue = (e) => {
        setPasswordInputValue(e.target.value)
    }

    const getEmailInputValue = (e) => {
        setEmailInputValue(e.target.value);
    }

    const isPasswordValueValid = passwordInputValue.length < 7;
    const isEmailValueValid = !emailInputValue.includes("@");

    const navigate = useNavigate();

    const logInSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN" })
        navigate('/todo-list')

    }

  return (
    <StyledForm>
        <Input placeholder="password" type="password" onChange={getPasswordInputValue} value={passwordInputValue}/>
        <Input placeholder="email" type="email" onChange={getEmailInputValue} value={emailInputValue}/>
        <Button onClick={logInSubmit} disabled={isPasswordValueValid || isEmailValueValid} title="login"/>
    </StyledForm>
  )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;

    padding: 20px;
    border: solid;
`
export default LoginPage