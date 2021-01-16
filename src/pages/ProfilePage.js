import React, {useContext, useState} from "react";
import { UserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from '@material-ui/icons/Publish';
import {auth, writeUserProfileImage} from "../services/firebase";



const ProfilePage = () => {
    const user = useContext(UserContext);
    const [image, setImage] = useState(null);
    const {photoURL, displayName, email} = user;

    const onFileChange = event => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }
    const onFileUpload = () => {
        // upload the photo to the database
        console.log(user.uid)
        writeUserProfileImage(user.uid, image);
        // reset the uploadedPhoto state to null
        setImage(null)
    }

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
            <div>
                <input type='file' onChange={onFileChange}/>
                <IconButton onClick={onFileUpload}>
                    <PublishIcon/>
                </IconButton>
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