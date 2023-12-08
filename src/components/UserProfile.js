import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import userStore from "../stores/userStore";
import { Box, Center } from "native-base";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listener = userStore.onProfileLoaded(() => {
      setIsLoading(false);
    });

    return () => listener();
  }, []);

  const { profile } = userStore;

  if (isLoading) {
    return <Text>Loading profile information...</Text>;
  }

  return (
    <SafeAreaView>
      <Box>
        <Center>
          <Text>Welcome, {profile.name}</Text>
          <Text>Age Group: {profile.ageGroup}</Text>
          <Text>Height: {profile.height}</Text>
          <Text>Weight: {profile.weight}</Text>
          <Text>Body Type: {profile.bodyType}</Text>
          <Text>Lifestyle: {profile.lifestyle}</Text>
          <Text>Fitness Experience: {profile.fitnessExperienceLevel}</Text>
          <Text>Current Fitness Level: {profile.currentFitnessLevel}</Text>
          <Text>Timeline: {profile.timeline}</Text>
          <Text>Daily Allotment: {profile.dailyAllotment}</Text>
          <Text>Current Diet: {profile.currentDiet}</Text>
          <Text>Dietary Restrictions: {profile.dietaryRestrictions}</Text>
          <Text>Fitness Goals: {profile.fitnessGoals} </Text>
          <Text>Additional Info: {profile.additionalInfo}</Text>
        </Center>
      </Box>
    </SafeAreaView>
  );
};

export default UserProfile;
