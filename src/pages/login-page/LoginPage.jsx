import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [emailInputValue, setEmailInputValue] = useState("");

    const dispatch = useDispatch();

    const authPassword = useSelector((state) => {
        return console.log(state.password)
    })

    const getPasswordInputValue = () => {
        dispatch({ type: "PASSWORD_VALUE", payload: authPassword })
    }

    const getEmailInputValue = (e) => {
        setEmailInputValue(e.target.value);
    }

    const navigate = useNavigate();

    const LoginHandler = () => {
        dispatch()
    }

    const isPasswordValueValid = passwordInputValue.length < 7;
    const isEmailValueValid = !emailInputValue.includes("@");

  return (
    <StyledForm>
        <Input placeholder="password" type="password" onChange={getPasswordInputValue} value={passwordInputValue}/>
        <Input placeholder="email" type="email" onChange={getEmailInputValue} value={emailInputValue}/>
        <Button disabled={isPasswordValueValid || isEmailValueValid} onClick={LoginHandler} title="login"/>
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