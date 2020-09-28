import React from 'react'
import LoginForm from '../components/LoginForm';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function LoginUserPage() {
    return (
        <LoginWrapper>
        <LoginHeader>SIGN IN TO BUSINESS APP</LoginHeader>
        <LoginForm/>
        <RegisterLink as={Link} to="/register">REGISTER</RegisterLink>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.section`
display:flex;
flex-direction:column;
width:auto;
justify-content:center;
`

const LoginHeader = styled.h2`
text-shadow:2px 2px 4px gray;
`

const RegisterLink = styled.p`
cursor:pointer;
text-decoration:none;
color:white;
font-size:14px;
position:relative;
align-self:flex-end;
justify-self:flex-end;
text-shadow:2px 2px 2px black;
top:10px;
cursor:pointer;
&:hover {
    text-decoration:none;
}
`