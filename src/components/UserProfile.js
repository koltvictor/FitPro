import { SafeAreaView, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../app/firebase/firebase";
import userStore from "../stores/userStore";
import { UserContext } from "../contexts/userContext";
import { Box, Center } from "native-base";

export default function UserProfile() {
  const { profile } = userStore;
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async (userId) => {
      try {
        setIsLoading(true);
        const profileRef = db.collection("profiles").doc(userId);
        const doc = await profileRef.get();
        if (doc.exists) {
          const profileData = doc.data();
          userStore.setProfile(profileData);
        } else {
          console.log("No profile data available");
        }
      } catch (error) {
        console.log("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchUserProfile(user.uid);
    }
  }, [user]);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Box>
          <Center>
            <Text>Loading...</Text>
          </Center>
        </Box>
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView>
        <Box>
          <Center>
            <Text>No profile data available</Text>
          </Center>
        </Box>
      </SafeAreaView>
    );
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
        </Center>
      </Box>
    </SafeAreaView>
  );
}
