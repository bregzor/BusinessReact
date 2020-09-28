import styled from "styled-components";

//GLOBAL FORM LAYOUT

export const PRIMARY_COLOR = "#886f5fdb";
export const ACCENT_COLOR = "#886f5fdb";

export const InputWrapper = styled.div `
  display: flex;
  flex-direction: column;  
  flex-wrap: wrap;
  height: min-content;
  background: #886f5fdb;
  padding: 20px;
  border-radius:10px;
  min-width:500px;
  width:${props => props.width || "auto"};
`;

export const Input = styled.input `
  cursor: pointer;
  border: 0;
  outline: none;
  border-radius: 10px;
  height: 10px;
  margin-right: 20px;
  padding: 15px;
  margin-bottom: 20px;
  &:hover {
    filter: drop-shadow(0px 2px 5px white);
  }
`;

export const ViewInput = styled.div `
  cursor: pointer;
  min-height: 85px;
  outline: none;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom:1px solid white;
`;

export const Button = styled.button `
  border-radius: 10px;
  height: 50px;
  outline: none;
  background: gray;
  border: 0;
  width: 100px;
  color: white;
  cursor: pointer;
  align-self:flex-end;
  &:hover {
    transition: all 250ms ease-in;
    background: black;
  }
`;


export const SectionHeader = styled.h2 `
text-shadow:2px 2px 4px gray;

`
    //USER SETTINGS BUTTONS!---------->
export const UserIcon = styled(Button)
`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #9abcc3;
  width: 50px;
  font-size: 28px;
  transition: all 250ms ease-in;
  &:hover {
    background: brown;
    transition: all 250ms ease-in;
  }
`;
export const DeleteButton = styled(UserIcon)
`
  background: ${(props) => props.bg || "#9abcc3"};
  position:${(props) => props.pos || "relative"};
`;

export const EditButton = styled(UserIcon)
`
  background: ${(props) => props.bg || "#9abcc3"};
`;