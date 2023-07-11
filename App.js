import React from "react";
import { UserProvider } from "./src/Providers/userProvider";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <UserProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </UserProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
