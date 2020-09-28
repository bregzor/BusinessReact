import React, { useRef, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import FormListHandler from "./FormListHandler";
import styled from "styled-components";

export default function LoginForm() {
  const { history, uKit, setLoginToken } = useContext(UserContext);

  let email = useRef();
  let password = useRef();
  const [response, setResponse] = useState(null);

  const loginFields = [
    ["Enter email", "email", email, "email"],
    ["Enter password", "password", password, "password"],
  ];

  //Sets token to ls and pushed user to mainpage
  //Sending in fail response aswell.
  const handleLogin = () => {
    uKit
      .loginUser(loginFields)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("TOKEN", data.token);
        setLoginToken(data.token);
        setResponse(Object.entries(data));
        data.token && history.push("/user-page");
      });
  };

  return (
    <FormListHandler
      fields={loginFields}
      btnOnClick={handleLogin}
      btnTitle="Login"
      response={response}
    />
  );
}
