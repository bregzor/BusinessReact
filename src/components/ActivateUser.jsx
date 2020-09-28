import React, {useContext} from 'react'
import {UserContext} from '../context/UserContext';
import {Button, InputWrapper} from '../components/global_styles';

export default function ActivateUser() {

    const {uKit, uid, token, setUid, setToken, history} = useContext(UserContext)
    const handleActivateUser = () => {
       console.log("JA");
        uKit.activateUser(uid, token).then(() => {
          setUid(null);
          setToken(null);
          history.push("/login");
        })
      };

    return (
        <InputWrapper>
            <h2>Activate User</h2>
            <p>Please activate your user to start using the app!</p>
            <Button onClick={handleActivateUser}>Activate</Button>
        </InputWrapper>
    )
}
