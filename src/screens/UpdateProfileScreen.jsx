import { View, Text } from "react-native";
import React from "react";

export default function UpdateProfileScreen() {
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
    <View>
      <Text>UpdateProfileScreen</Text>
    </View>
  );
}
