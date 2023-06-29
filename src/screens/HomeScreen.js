import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function HomeScreen() {
  const user = useContext(UserContext);
  console.log("this is home screen:", user);
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Welcome, {user}</Text>
    </View>
  );
}
