import { SafeAreaView, TouchableOpacity, Text } from "react-native";
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
      <Box alignItems="center">
        <Button onPress={handleLogout}>Logout</Button>
      </Box>
    </SafeAreaView>
  );
}
