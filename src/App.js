import React from "react";
import UserProvider from "./providers/UserProvider";
import Application from "./components/Application"




function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  )
}

export default App;
