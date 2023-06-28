import React from "react";
import { UserProvider } from "./src/Providers/userProvider";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
};

export default App;
