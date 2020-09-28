import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteButton, EditButton } from "./global_styles";
import { IoIosClose, IoIosBrush, IoIosRemove  } from "react-icons/io";
import styled from "styled-components";

export default function CustomerList({ data, handleDelete }) {
  useEffect(() => {
    renderCustomers();
  }, [data]);

  const renderCustomers = () => {
    return data.map((customer, index) => {
      return (
        <CustomerRow key={index}>
        <CellWrapper>
          <CustomerCell>{customer.name}</CustomerCell>
          <CustomerCell>{customer.email}</CustomerCell>
          <CustomerCell>{customer.orgNr }</CustomerCell>
        </CellWrapper>
          <ButtonWrapper>
          <DeleteButton id={customer.id} onClick={(e) => handleDelete(e)}>
          <IoIosRemove/>
          </DeleteButton>
          <EditButton as={Link} to={`/customer/${customer.id}`}>
            <IoIosBrush />
          </EditButton>
          </ButtonWrapper>
        </CustomerRow>
      );
    });
  };
  return (
    <CustomerListContainer>
      {data.length > 0 ? <HeaderContainer>
        <pre>COMPANY NAME</pre>
        <pre>E-MAIL</pre>
        <pre>ORG-NR</pre>
      </HeaderContainer>
      : <EntryMessage>Welcome, please create your first customer!</EntryMessage>
    }
      {renderCustomers()}

    </CustomerListContainer>
  );
}

const EntryMessage = styled.h4`
font-size:18px;
text-decoration:underline;
`

const CustomerListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-direction: column;
`;


const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
width:min-content;
gap:20px;
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap:70px;
  border-bottom:1px solid white;
`;

const CellWrapper = styled.div`
 display:flex;
 width:auto;
 flex-direction:row;
 gap:20px;
`

const CustomerRow = styled.article`
  display: flex;
  flex-direction: row;
  width: 70vw;
  border-bottom: 1px solid white;
  color: white;
  padding: 10px;
  
  justify-content: space-between;
  &:nth-child(odd) {
    background: #755544a3;
  }
  ${"" /* align-items:flex-start; */}
  &:hover {
    border-bottom: 1px solid orange;
    cursor: pointer;
  }
`;


const CustomerCell = styled.p`
  color: white;
  padding: 5px;
`;
