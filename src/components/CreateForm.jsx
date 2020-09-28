import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { InputWrapper, Input, Button } from "./global_styles";
import FormListHandler from "./FormListHandler";

export default function CreateForm() {
  const { history, uKit } = useContext(UserContext);

  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const orgName = useRef("");
  const orgKind = useRef("");
  const password = useRef("");

  const userfields = [
    ["Firstname", "text", firstname, "firstName"],
    ["Lastname", "text", lastname, "lastName"],
    ["Email", "email", email, "email"],
    ["Password", "password", password, "password"],
    ["Orgname", "text", orgName, "organisationName"],
    ["Orgkind", "text", orgKind, "organisationKind"],
  ];

  const [response, setResponse] = useState(null);
  const handleRegister = () => {
    uKit
      .createUser(userfields)
      .then((res) => res.json())
      .then((data) => {
        let arr = Object.entries(data);
        setResponse(arr);
      });
  };

  return (
    <>
      <FormListHandler
        fields={userfields}
        btnOnClick={handleRegister}
        btnTitle="Create user"
        response={response}
      />
    </>
  );
}
