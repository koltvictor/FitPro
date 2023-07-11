import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import userStore from "../stores/userStore";
import { Box, Center } from "native-base";
import TabBar from "../components/TabBar";

export default function HomeScreen() {
  const { profile } = userStore;

  if (!profile) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Box>
        <Center>
          <Text>Welcome, {profile.name}</Text>
          <Text>Height: {profile.height}</Text>
          <Text>Weight: {profile.weight}</Text>
          <Text>Body Type: {profile.bodyType}</Text>
          <Text>Lifestyle: {profile.lifestyle}</Text>
          <Text>Fitness Experience: {profile.fitnessExperience}</Text>
          <Text>Current Diet: {profile.currentDiet}</Text>
          <Text>Dietary Restrictions: {profile.dietaryRestrictions}</Text>
          <Text>Fitness Goals: {profile.fitnessGoals} </Text>
        </Center>
      </Box>
      <TabBar />
    </SafeAreaView>
  );
}
