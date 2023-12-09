import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import userStore from "../stores/userStore";
import { Box, Button, Center, Modal } from "native-base";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleUpdateProfile = async () => {
    const uid = user.user.uid;
    const docRef = doc(db, "profiles", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(doc(db, "profiles", uid), {
        name: name,
        ageGroup: ageGroup,
        height: height,
        weight: weight,
        bodyType: bodyType,
        currentFitnessLevel: currentFitnessLevel,
        lifestyle: lifestyle,
        fitnessExperienceLevel: fitnessExperienceLevel,
        currentDiet: currentDiet,
        dietaryRestrictions: dietaryRestrictions,
        fitnessGoals: fitnessGoals,
        timeline: timeline,
        dailyAllotment: dailyAllotment,
        additionalInfo: additionalInfo,
      });
      const updateProfileDoc = await getDoc(docRef);
      const updatedProfile = updateProfileDoc.data();
      userStore.setProfile(updatedProfile);
    } else {
      console.log("No such document!");
    }
    userStore.emitProfileLoaded();
    setIsModalVisible(false);
    console.log(userStore.profile);
  };

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
          <Button onPress={() => setIsModalVisible(true)}>
            Update Profile
          </Button>
        </Center>
      </Box>
      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Update Profile</Modal.Header>
          <Modal.Body>
            <Text>Update Profile</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={() => setIsModalVisible(false)}>Cancel</Button>
              <Button onPress={handleUpdateProfile}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default UserProfile;
