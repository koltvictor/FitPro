import React, { useState } from "react";
import { Text, Input, Button } from "react-native";
import { Center, Modal } from "native-base";

const UpdateModal = () => {
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAgeGroup, setUpdatedAgeGroup] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleUpdateProfile = async () => {
    const uid = user.user.uid;
    const docRef = doc(db, "profiles", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(doc(db, "profiles", uid), {
        name: updatedName || undefined,
        ageGroup: updatedAgeGroup || undefined,
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
