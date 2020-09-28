import React, { useContext, useState, useEffect } from "react";
import CustomerForm from "../components/CustomerForm";
import UserNavBar from "../components/UserNavBar";
import CustomerList from "../components/CustomerList";
import ProfileBar from "../components/ProfileBar";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { Button } from "../components/global_styles";

export default function UserPage() {

  const { uKit, history, customerList, setCustomerList} = useContext(UserContext);
  const [content, setContent] = useState("list");


  //Get customerlist
  const handleUser = () => {
    uKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  };


  //Removes customer from endpoint
  const handleDelete = (e) => {
    const userID = e.currentTarget.id;
    if (window.confirm("Are you sure?")) {
      uKit.deleteCustomer(userID).then((res) => {
        if (res.ok) {
          handleUser();
        }
      });
    }
  };

  //tab id, title
  const USER_MENU = [
    ["list", "Show all customers"],
    ["create", "Create customer"],
  ];

  //Handles types of content based on navbar click (customerlist or customerForm)
  const handleContent = () => {
    return content == "list" ? (
      customerList && (
        <CustomerList data={customerList} handleDelete={handleDelete} />
      )
    ) : (
      <CustomerForm />
    );
  };
  
  //Removes token and pushed user to loginpage
  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    history.push("/");
  };

  //Init customerList based on content changed!
  useEffect(() => {
    handleUser();

  }, [content]);

  return (
    <>
      <ProfileBar/>
      <UserWrapper>
        <UserNavBar menuItems={USER_MENU} setContent={setContent} />
        <ContentContainer>{handleContent()}</ContentContainer>
      </UserWrapper>
      <LogoutContainer>
        <Button onClick={handleLogout}>Logout</Button>
      </LogoutContainer>
    </>
  );
}

const UserWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 10px;
  background: #886f5fdb;
  max-width:75vw;
  min-height: 670px;
  filter: drop-shadow(2px 4px 5px gray);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoutContainer = styled.div`
  position: fixed;
  background: transparent;
  right: 40px;
  top: 40px;
  text-transform: uppercase;
`;
