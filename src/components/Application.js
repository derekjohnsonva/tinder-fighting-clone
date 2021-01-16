import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserContext } from "../providers/UserProvider";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "../pages/ChatScreen";
import SignUp from "../pages/SignUp";
import PasswordReset from "../pages/PasswordReset";
import ProfilePage from "../pages/ProfilePage"
import Landing from "../pages/Landing";


function Application() {
  const user = useContext(UserContext);
  return (
    user ? 
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/app/chat" />
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/app" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header backButton="/app" />
            <ProfilePage />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
  :
  <Router>
    <Route path="/signUp">
      <SignUp/>
    </Route>
    <Route exact path="/">
      <Landing/>
    </Route>
    <Route path="/passwordReset">
      <PasswordReset/>
    </Route>
  </Router>
  );
}

export default Application;
