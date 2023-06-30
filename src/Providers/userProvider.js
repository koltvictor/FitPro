import React, { useState, useEffect } from "react";
import { auth } from "../app/firebase/firebase";
import { UserContext } from "../contexts/userContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onAuthStateChanged = async (userAuth) => {
      try {
        if (userAuth) {
          setUser(userAuth);
          const unsubscribe = () => {
            unsubscribeProfile();
          };
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log("Error in onAuthStateChanged: ", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("this is provider:", user);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
