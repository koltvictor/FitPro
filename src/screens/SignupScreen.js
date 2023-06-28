import {
  Button,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
} from "native-base";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, createUserWithEmailAndPassword } from "../app/firebase/firebase";
import { UserContext } from "../contexts/userContext";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (email === "" || password === "" || confirmPassword === "") {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        UserContext.Provider.current.setValue(newUser);
      })
      .catch((error) => {
        Alert.alert(error);
      });
    navigation.navigate("Home");
  };

  return (
    <Center>
      <Box safeArea p="2" w="90%" maxW="290" py="10">
        <Heading
          size="lg"
          color="coolGray.500"
          _dark={{ color: "warmGray.50" }}
          fontWeight={900}
        >
          Signup
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight={600} size="xs">
          Create a new account
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              value={confirmPassword}
              required
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </FormControl>
          <Button mt="2" onPress={handleSignup}>
            Signup
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
