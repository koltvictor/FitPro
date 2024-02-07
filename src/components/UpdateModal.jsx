import React, { useState } from "react";
import { Text, Input, Button } from "react-native";
import { Center, Modal } from "native-base";
import userStore from "../stores/userStore";

const UpdateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profile, setProfile] = useState(userStore.profile);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAgeGroup, setUpdatedAgeGroup] = useState("");
  const [updatedHeight, setUpdatedHeight] = useState("");
  const [updatedWeight, setUpdatedWeight] = useState("");
  const [updatedBodyType, setUpdatedBodyType] = useState("");
  const [updatedLifestyle, setUpdatedLifestyle] = useState("");
  const [updatedFitnessExperienceLevel, setUpdatedFitnessExperienceLevel] =
    useState("");
  const [updatedCurrentFitnessLevel, setUpdatedCurrentFitnessLevel] =
    useState("");
  const [updatedTimeline, setUpdatedTimeline] = useState("");
  const [updatedDailyAllotment, setUpdatedDailyAllotment] = useState("");
  const [updatedCurrentDiet, setUpdatedCurrentDiet] = useState("");
  const [updatedDietaryRestrictions, setUpdatedDietaryRestrictions] =
    useState("");
  const [updatedFitnessGoals, setUpdatedFitnessGoals] = useState("");
  const [updatedAdditionalInfo, setUpdatedAdditionalInfo] = useState("");

  // const handleUpdateProfile = async () => {
  //   try {
  //     const uid = user.uid;
  //     const profileDocRef = doc(db, "profiles", uid);
  //     const updatedFields = {} || undefined;
  //     if (username) {
  //       updatedFields.username = username;
  //     }
  //     if (icon) {
  //       updatedFields.icon = icon;
  //     }
  //     await updateDoc(profileDocRef, updatedFields);
  //     console.log("Profile updated successfully");

  //     // Update userStore
  //     const updatedProfileDoc = await getDoc(profileDocRef);
  //     const updatedProfile = updatedProfileDoc.data();
  //     userStore.setProfile(updatedProfile);

  //     // Update local state
  //     setProfile(updatedProfile);
  //   } catch (error) {
  //     console.log("Error updating profile:", error);
  //   }
  //   userStore.emitProfileLoaded();
  //   setIsModalVisible(false);
  // };

  const handleUpdateProfile = async () => {
    const uid = user.uid;
    const docRef = doc(db, "profiles", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(doc(db, "profiles", uid), {
        name: updatedName,
        ageGroup: updatedAgeGroup,
        height: updatedHeight,
        weight: updatedWeight,
        bodyType: updatedBodyType,
        currentFitnessLevel: updatedCurrentFitnessLevel,
        lifestyle: updatedLifestyle,
        fitnessExperienceLevel: updatedFitnessExperienceLevel,
        currentDiet: updatedCurrentDiet,
        dietaryRestrictions: updatedDietaryRestrictions,
        fitnessGoals: updatedFitnessGoals,
        timeline: updatedTimeline,
        dailyAllotment: updatedDailyAllotment,
        additionalInfo: updatedAdditionalInfo,
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
    <div className="modal">
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
    </div>
  );
};

export default UpdateModal;
