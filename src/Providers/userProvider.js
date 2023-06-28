import React, { useState } from "react";
import { UserContext } from "../contexts/userContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleSignup = async (newUser) => {
    setUser(newUser);
    UserContext.Provider.current.setValue(newUser);
  };
  console.log("this is provider:", user);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
