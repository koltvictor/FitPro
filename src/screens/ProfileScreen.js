import { SafeAreaView } from "react-native";
import { auth } from "../app/firebase/firebase";
import React from "react";
import UserProfile from "../components/UserProfile";
import { Box, Button } from "native-base";

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    await auth.signOut();
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <UserProfile />
      <Box
        style={{
          position: "absolute",
          bottom: -250,
          left: 0,
          right: 0,
          padding: 20,
        }}
      >
        <Button onPress={handleLogout}>Logout</Button>
      </Box>
    </SafeAreaView>
  );
}
