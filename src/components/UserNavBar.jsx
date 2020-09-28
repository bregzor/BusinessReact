import React from "react";
import styled from "styled-components";

export default function UserNavBar({menuItems, setContent }) {
  
  const handleContent = (e) => {
    setContent(e.target.id);
  };

  const renderNavItem = (id, title, key) => {
    return (
      <NavItem id={id} key={key} onClick={(e) => handleContent(e)}>
        {title}
      </NavItem>
    );
  };

  return (
    <UserNav>
      {menuItems.map((link, index) => {
        const id = link[0];
        const title = link[1];
        const key = index;
        return renderNavItem(id, title, key);
      })}
    </UserNav>
  );
}

const UserNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width:80vw;
  background:transparent;
  ${'' /* border-bottom:1px solid white; */}
  overflow:hidden;
  position:relative;
  top:-27px;
  z-index:0;
`;

const NavItem = styled.button`
outline:none;
border:0;
height:70px;
color:#28535f;
font-weight:bold;
text-transform:uppercase;
padding:20px;
margin-right:0px;
cursor:pointer;
border-radius:15px;
border-bottom-left-radius: 2px 2px;
border-bottom-right-radius: 0px 0px;
position:relative;
&:hover {
 background:#404646;
 color:white;
}

`;
