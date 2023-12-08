import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { auth } from "../app/firebase/firebase";
import React from "react";
import UserProfile from "../components/UserProfile";

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    await auth.signOut();
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <UserProfile />
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
