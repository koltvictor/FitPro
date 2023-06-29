import React, { useState, useEffect } from "react";
import { UserProvider } from "./src/Providers/userProvider";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { NativeBaseProvider } from "native-base";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isUserLoggedIn = !!user;
    if (isUserLoggedIn) {
      console.log("user is logged in");
    } else {
      console.log("user is not logged in");
    }
  }, [user]);

  return (
    <NativeBaseProvider>
      <UserProvider value={user}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
};

export default App;
