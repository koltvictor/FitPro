import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function HomeScreen() {
  const user = useContext(UserContext);

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Welcome, {user.email}</Text>
    </View>
  );
}
