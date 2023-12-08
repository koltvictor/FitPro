import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../contexts/userContext";
import { auth, db } from "../app/firebase/firebase";
import userStore from "../stores/userStore";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    console.log("UserProvider useEffect");
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
          setIsLoading(false); // Set isLoading to false when data is fetched
        } else {
          setUser(null);
          setIsLoading(false); // Set isLoading to false when userAuth is null
        }
      } catch (error) {
        console.log("Error in onAuthStateChanged: ", error);
        setIsLoading(false); // Set isLoading to false on error
      }
    };

    const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);

    return () => {
      unsubscribe();
    };
  }, [user]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const value = {
    user,
    profile,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
