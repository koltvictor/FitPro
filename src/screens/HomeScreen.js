import { SafeAreaView } from "react-native";
import React from "react";
import TabBar from "../components/TabBar";
import UserProfile from "../components/UserProfile";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <TabBar />
    </SafeAreaView>
  );
}
