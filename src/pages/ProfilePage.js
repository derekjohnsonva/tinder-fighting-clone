import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";

import {auth} from "../services/firebase";



const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;

    return( 
        <div>
            <h1>Profile Page</h1>
            <h3>{email}</h3>
            <h3>{displayName}</h3>
            <div
              style={{ backgroundImage: `url(${photoURL})`, height: 100, width: 100}}
              className="card"
            >
            </div>
            <Link to={"/"}>
                <button
                    onClick= {() => {auth.signOut()}}>
                    Sign out
                </button>
            </Link>
        </div>
        )
}
export default ProfilePage;