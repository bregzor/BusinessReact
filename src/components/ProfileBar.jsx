import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';

export default function ProfileBar() {
   
    const {uKit} = useContext(UserContext);
    const [user, setUser] = useState({});

    const handleUser = () => {
    uKit.getUser()
    .then(res =>  res.json())
    .then(data => {
       setUser(data);
    })
    }
    
    useEffect(() => {
        handleUser();
    }, [])

    return (
        <UserBar>
            {user.firstName} {user.lastName}
        </UserBar>
    )
}

const UserBar = styled.pre`
width:100%;
color:black;
text-transform:uppercase;
position:absolute;
height:10px;
top:20px;
left:20px;
`
