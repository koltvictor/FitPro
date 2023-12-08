import { View, Text, Alert } from "react-native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";
import React, { useState, useEffect } from "react";
import {
  auth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "../app/firebase/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      console.warn("Error logging in:", error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);
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
          Login
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
          <Button mt="2" onPress={handleLogin}>
            Login
          </Button>
          <Button
            mt="2"
            backgroundColor="#FFFFFF"
            borderColor="#20A8F4"
            borderWidth="1px"
            _text={{ color: "#20A8F4" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Don't have an account yet? Signup!
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
