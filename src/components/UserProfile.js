import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import userStore from "../stores/userStore";
import { Box, Button, Center, Modal, Input } from "native-base";
import { UserContext } from "../contexts/userContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAgeGroup, setUpdatedAgeGroup] = useState("");

  console.log(user);

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
        name: updatedName,
        ageGroup: updatedAgeGroup,
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
            onPress={() => setIsModalVisible(true)}
          >
            Update Profile
          </Button>
        </Center>
      </Box>
      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Modal.Content maxWidth="400px">
          <Center>
            <Modal.Header>UPDATE PROFILE</Modal.Header>
          </Center>
          <Modal.Body>
            <Text>Name: {profile.name}</Text>
            <Input
              placeholder="Update your name"
              onChangeText={(text) => setUpdatedName(text)}
            />
            <Text>Age Group: {profile.ageGroup}</Text>
            <Input
              placeholder="Update your age group"
              onChangeText={(text) => setUpdatedAgeGroup(text)}
            />
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
