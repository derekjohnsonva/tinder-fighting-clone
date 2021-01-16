import React, { useState } from "react";
import LoginPopup from "../components/LoginPopup";
import "./Landing.css";

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from "../static/logo512.png"

const SignUpButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 100,
      border: 0,
      color: 'white',
      height: 48,
      width: 260,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        fontSize: 17,
        fontWeight: 400,
      textTransform: 'capitalize',
    },
  })(Button);

const LogInButton = withStyles({
root: {
    '&:hover': {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
    },
    background: 'white',
    borderRadius: 10,
    border: 0,
    color: '#FF8E53',
    height: 48,
    width: 100,
},
label: {
    fontSize: 17,
    fontWeight: 400,
    textTransform: 'capitalize',
},
})(Button);

function Landing() {
    //TODO: Checks if the user is logged in and if so reroutes to the main page
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    return(
        <div className="landing">
            <LoginPopup title="Sign Up" openPopup={openSignUp} setOpenPopup={setOpenSignUp}/>
            <LoginPopup title="Log In" openPopup={openLogin} setOpenPopup={setOpenLogin}/>
            
            <div className="landing__header">
                <div className="landing__header__logo">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="boxing-logo"
                    />
                    <h3>brawlr</h3>
                </div>
                <div className="landing__header__buttons">
                    <LogInButton
                        onClick={()=>setOpenLogin(true)}>
                        Log In
                    </LogInButton>
                </div>
            </div>
            <div className="landing__body">
                <div className="landing__centered">
                    <div className="landing__title">
                        <h1>Fight Right</h1>
                    </div>
                    <SignUpButton
                        onClick={()=>{setOpenSignUp(true)}}>
                        CREATE ACCOUNT
                    </SignUpButton>
                </div>
            </div>
        </div>)
}

export default Landing;
