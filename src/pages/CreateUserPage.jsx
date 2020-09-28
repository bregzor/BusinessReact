import React from "react";
import CreateForm from "../components/CreateForm";
import { SectionHeader } from "../components/global_styles";
import styled from 'styled-components';

export default function CreateUserPage() {
  return (
    <CreateUserWrapper>
      <SectionHeader>REGISTER USER</SectionHeader>
      <CreateForm />
    </CreateUserWrapper>
  );
}

const CreateUserWrapper = styled.div`
width:50%;
`;
