import React,{useContext} from 'react';

import { LoginContext } from '../contexts/LoginContext';

const Profile = () => {
    const { username }=useContext(LoginContext);

    return (
        <div>
            <h1> Profile</h1>
            <h2> Username:{username}</h2>
        </div>
    )
}

export default Profile
