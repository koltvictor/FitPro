import { db } from "../app/firebase/firebase";
import userStore from "../stores/userStore";

export const handleUpdateProfile = async () => {
  try {
    const uid = user.uid;
    const profileDocRef = doc(db, "profiles", uid);
    const updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }
    if (icon) {
      updatedFields.icon = icon;
    }
    await updateDoc(profileDocRef, updatedFields);
    console.log("Profile updated successfully");

    // Update userStore
    const updatedProfileDoc = await getDoc(profileDocRef);
    const updatedProfile = updatedProfileDoc.data();
    userStore.setProfile(updatedProfile);

    // Update local state
    setProfile(updatedProfile);
  } catch (error) {
    console.log("Error updating profile:", error);
  }
};
