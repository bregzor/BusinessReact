import React from "react";
import styled from "styled-components";

export default function LayOut({ title = "Some header", children }) {
  return (
    <>
      <Header><h1>{title}</h1></Header>
      <Main>{children}</Main>
      <Footer><p>By Christopher Berge 2020</p></Footer>
    </>
  );
}

const Header = styled.header`
width:100vw;
height:20px;
position:fixed;
top:0;
display:flex;
justify-content:center;
opacity:0.8;
`;

const Main = styled.main`
display:flex;
height:100vh;
align-items:center;
justify-content:center;
padding:20px;
height:calc(100vh - 30px);
`;
const Footer = styled.footer``;
