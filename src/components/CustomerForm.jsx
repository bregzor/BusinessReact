import React, { useRef, useContext, useState, useEffect } from "react";
import FormListHandler from "./FormListHandler";
import { UserContext } from "../context/UserContext";

export default function CustomerForm({ type = null, values = null }) {
  const companyName = useRef();
  const orgNr = useRef();
  const vatNr = useRef();
  const reference = useRef();
  const paymentTerm = useRef();
  const website = useRef();
  const email = useRef();
  const phone = useRef();

  //placeholder, type, ref, payload name
  const customerFields = [
    ["Company name", "text", companyName, "name"],
    ["Org-nr", "number", orgNr, "organisationNr"],
    ["Vat-nr", "number", vatNr, "vatNr"],
    ["Reference", "text", reference, "reference"],
    ["Payment-term", "text", paymentTerm, "paymentTerm"],
    ["Website", "text", website, "website"],
    ["Email", "email", email, "email"],
    ["Phone", "number", phone, "phoneNumber"],
  ];

  const { uKit } = useContext(UserContext);
  const [buttonResponse, setButtonResponse] = useState("Create customer");
  const [response, setResponse] = useState(null);

 
  //Creates customer
  const handleCreateCustomer = () => {
    uKit
      .createCustomer(customerFields)
      .then((res) => res.json())
      .then((data) => {
        const response = Object.entries(data);
        if (uKit.isInvalidResponse(response)) {
          setResponse(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <FormListHandler
      fields={customerFields}
      btnOnClick={handleCreateCustomer}
      btnTitle={buttonResponse}
      response={response}
    />
  );
}
