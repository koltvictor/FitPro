import React, { useState, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "../app/firebase/firebase";
import userStore from "../stores/userStore";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const onAuthStateChanged = async (userAuth) => {
      try {
        if (userAuth) {
          setUser(userAuth);
          userStore.setUser(userAuth);
          const profileDoc = await db
            .collection("profiles")
            .doc(userAuth.uid)
            .get();
          setProfile(profileDoc.data());
          userStore.setProfile(profileDoc.data());
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

  console.log("this is provider user:", user);
  console.log("this is provider profile:", profile);

  const value = {
    user,
    profile,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
