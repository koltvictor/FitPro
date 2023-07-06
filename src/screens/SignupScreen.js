import {
  Button,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../app/firebase/firebase";
import { UserContext } from "../contexts/userContext";

export default function SignupScreen({ navigation }) {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (email === "" || password === "" || confirmPassword === "") {
      toast.show({
        description: "All fields are required",
        variant: "top-accent",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.show({
        description: "Passwords do not match",
        variant: "top-accent",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        UserContext.Provider.current = <UserContext.Provider value={user} />;

        if (userCredential.user.email === "existing_email") {
          toast.show({
            description: "That email address is already in use!",
            variant: "top-accent",
          });
          return;
        }

        navigation.navigate("Questions");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.show({
            description: "That email address is already in use!",
            variant: "top-accent",
          });
        }

        if (error.code === "auth/invalid-email") {
          toast.show({
            description: "That email address is invalid!",
            variant: "top-accent",
          });
        }

        console.error(error);
      });
  };

  return (
    <Center>
      <Box safeArea p="2" w="90%" h="50%" maxW="290" py="10">
        <Heading
          size="lg"
          color="coolGray.500"
          _dark={{ color: "warmGray.50" }}
          fontWeight={900}
          textAlign="center"
        >
          Signup
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          fontWeight={600}
          size="xs"
          textAlign="center"
        >
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
