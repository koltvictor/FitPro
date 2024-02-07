import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import userStore from "../stores/userStore";
import { Box, Button, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
  const { profile } = userStore;
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listener = userStore.onProfileLoaded(() => {
      setIsLoading(false);
    });

    return () => listener();
  }, []);

  if (isLoading) {
    return <Text>Loading profile information...</Text>;
  }

  return (
    <SafeAreaView>
      <Box>
        <Center
          style={{
            paddingTop: 50,
            paddingLeft: 25,
            paddingRight: 25,
          }}
        >
          <Box
            style={{
              borderWidth: 2,
              borderColor: "#000000",
              borderRadius: 5,
              padding: 5,
              marginBottom: 10,
              backgroundColor: "#ffffff",
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Welcome, {profile.name}
            </Text>
          </Box>
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
          <Button
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate("UpdateProfile")}
          >
            Update Profile
          </Button>
        </Center>
      </Box>
    </SafeAreaView>
  );
};

export default UserProfile;
