import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import UserKit from "./data/UserKit";
import { UserContext } from "./context/UserContext";
import CreateUserPage from "./pages/CreateUserPage";
import LoginUserPage from "./pages/LoginUserPage";
import CustomerPage from "./pages/CustomerPage";
import UserPage from "./pages/UserPage";
import ActivateUser from "./components/ActivateUser";
import LayOut from "./components/LayOut";
import styled from 'styled-components';

const LoaderWrapper = styled.div`
 
 width:100px;
 height:100px;
 display:flex;
 justify-content:center;
 align-items:center;
 position:absolute;
 background:black;
 ${'' /* background:${props => props.opacity || "0"} */}
 opacity:${props => props.opacity || "0"}
`

function App() {
  const history = useHistory();

  //Uses only one instance through all project
  const uKit = new UserKit();

  const urlParameters = new URLSearchParams(history.location.search);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));
  const [loginToken, setLoginToken] = useState(null);
  const [customerList, setCustomerList] = useState([]);


  return (
    <>
      <UserContext.Provider
        value={{
          history,
          uKit,
          setLoginToken,
          customerList,
          setCustomerList,
          setUid,
          setToken,
          uid,
          token,
        }}
      >
        <Switch>
          <Route
            path="/customer/:id"
            render={(props) => {
              return (
                <LayOut title="">
                  <CustomerPage {...props} />
                </LayOut>
              );
            }}
          ></Route>

          <Route path="/user-page">
            {loginToken || localStorage.getItem("TOKEN") ? (
              <LayOut title="MANAGE YOUR CUSTOMERS">
                <UserPage />
              </LayOut>
            ) : (
              history.push("/")
            )}
          </Route>

          <Route path="/register">
            <LayOut title="">
              <CreateUserPage />
            </LayOut>
          </Route>

          <Route path="/">
            {uid && token ? (
              <LayOut>
                <ActivateUser />
              </LayOut>
            ) : (
              <LayOut title="">
                <LoginUserPage />
              </LayOut>
            )}
          </Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
