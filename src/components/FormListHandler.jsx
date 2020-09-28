import React from "react";
import { InputWrapper, Input, Button } from "./global_styles";
import styled from "styled-components";

export default function FormListHandler({
  fields,
  btnOnClick,
  btnTitle,
  response = null,
}) {
  const renderInputField = (placeholder, type, ref, value = null, key) => {
    return (
      <Input
        key={key}
        ref={ref}
        defaultValue={value}
        type={type}
        placeholder={placeholder}
      />
    ); 
  };

  const renderForm = () => {
    return fields.map((item, index) => {
      return renderInputField(item[0], item[1], item[2], item[4], index);
    });
  };

  return (
    <>
      <InputWrapper width="100%">
        {renderForm()}
        {response && <ResponseContainer>{response}</ResponseContainer>}
        {btnTitle && <Button onClick={btnOnClick}>{btnTitle}</Button>}
      </InputWrapper>
    </>
  );
}


const ResponseContainer = styled.p`
  width: 100%;
  font-size: 12px;
  font-weight:bold;
  line-height: 130%;
`;
