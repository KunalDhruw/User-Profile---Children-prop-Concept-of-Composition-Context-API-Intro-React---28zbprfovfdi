import React from "react";
import "../styles/App.css";
import { UserProfile } from "./UserProfile";

export const UserContext = React.createContext();

const App = () => {
  const user = { name: "Newton", age: 3 };

  return (
    <div id="main">
      <UserContext.Provider value={user}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};
export default App;
