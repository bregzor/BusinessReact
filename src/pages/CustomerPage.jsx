import React, { useEffect, useState, useContext, useRef } from "react";
import CustomerForm from "../components/CustomerForm";
import FormListHandler from "../components/FormListHandler";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import {
  InputWrapper,
  EditButton,
  DeleteButton,
  ViewInput,
  Input,
} from "../components/global_styles";
import { IoIosClose, IoIosBrush, IoIosRemove } from "react-icons/io";


export default function CustomerPage(props) {

  const id = props.match.params.id;
  const [customer, setCustomer] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [inEdit, setInEdit] = useState(false);
  const { history, uKit } = useContext(UserContext);


  //Using ref instead for state when handling inputdata
  //More efficient using state in this case?
  const companyName = useRef();
  const orgNr = useRef();
  const vatNr = useRef();
  const reference = useRef();
  const paymentTerm = useRef();
  const website = useRef();
  const email = useRef();
  const phone = useRef();


  //placeholder, type, ref, payload name
  let customerFields = [
    ["Company name", "text", companyName, "name", customer.name],
    ["Org-nr", "number", orgNr, "organisationNr",  customer.organisationNr],
    ["Vat-nr", "number", vatNr, "vatNr", customer.vatNr],
    ["Reference", "text", reference, "reference",  customer.reference],
    ["Payment-term", "text", paymentTerm, "paymentTerm", customer.paymentTerm],
    ["Website", "text", website, "website", customer.website],
    ["Email", "email", email, "email", customer.email],
    ["Phone", "number", phone, "phoneNumber", customer.phoneNumber],
  ];

  //Get customer info
  const getCustomer = (id) => {
    uKit
      .getCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
        setCustomerName(data.name)
      });
  };

  //Renders customer texts
  const renderCustomerField = () => {
    return Object.entries(customer).map((item, index) => {
      if (index > 1) {
        return (
          <ViewInput key={index}>
            <CustomerHeader>{item[0]}</CustomerHeader>
            <p>{item[1]}</p>
          </ViewInput>
        );
      }
    });
  };

  //Handling update request
  const handleUpdate = (id) => {
    uKit.updateCustomer(id, customerFields).then((data) => {
      window.confirm("Customer updated");
      history.push("/user-page");
    });
  };


  //Deletes current customer
  const handleDeleteThisCustomer = (id) => {
    if (window.confirm("Are you sure?")) {
      uKit.deleteCustomer(id).then((res) => {
        if (res.ok) {
          history.push("/user-page");
        }
      });
    }
  }

  //Renders update form or text based if inEdit boolean
  const renderTypeForm = () => {
    return !inEdit ? (
      <FieldWrapper>{renderCustomerField()}</FieldWrapper>
    ) : (
      <FieldWrapper>
        <UpdateButton id={id} onClick={(e) => handleUpdate(e.target.id)}>
          SAVE
        </UpdateButton>
        <FormListHandler
          fields={customerFields}
          btnOnClick={null}
          btnTitle=""
        />
      </FieldWrapper>
    );
  };

  //Inits customer info
  useEffect(() => {
    getCustomer(id);
  }, []);

  return (
    <CustomerWrapper>
      <InputHeaderWrapper>
        <CustomerBigHeader>{customerName}</CustomerBigHeader>
        <ButtonContainer>
        <DeleteButton bg={"red"} onClick={() => handleDeleteThisCustomer(id)}>
        <IoIosRemove/>
          </DeleteButton>
          <EditButton onClick={() => setInEdit(!inEdit)}>
            <IoIosBrush />
          </EditButton>
          <DeleteButton bg={"brown"} onClick={() => history.push("/user-page")}>
            <IoIosClose />
          </DeleteButton>
        </ButtonContainer>
      </InputHeaderWrapper>
      {customer && renderTypeForm()}
    </CustomerWrapper>
  );
}


const CustomerWrapper = styled(InputWrapper)`
width:70%;
justify-content:space-between;
`
const InputHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  justify-self: flex-end;
  padding: 20px;
  width: 300px;
  gap: 25px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  max-width:75vw;
  justify-content:space-between;
  align-items: center;
    margin: 40px;
    position: relative;
    top: -40px;
}
`;

const CustomerHeader = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  color:orange;
`;

const CustomerBigHeader = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  position: relative;
  left: 35px;
  color:white;
  font-size: 32px;
  border-bottom: 1px solid white;
`;

const UpdateButton = styled(EditButton)`
position:absolute;
right:0;
bottom:0;
font-size:12px;
`