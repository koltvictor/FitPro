import { SafeAreaView, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Box } from "native-base";

export default function HomeScreen() {
  const user = useContext(UserContext);

  if (!user) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Box>
        <Text>Home Screen</Text>
        <Text>Welcome, {user.email}</Text>
      </Box>
    </SafeAreaView>
  );
}
