import React, { useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";
import image from "../assets/splash.png";
import { useNavigation } from "@react-navigation/native";
// import { Image } from "react-native-svg";

const SplashScreen = () => {
  const navigation = useNavigation();

  // Animation values
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Slide animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Navigate to Login screen after 2 seconds
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, [fadeAnim, navigation, slideAnim]);

  return (
    <View>
      <Animated.View>
        <Image source={image} style={{ height: "100%", width: "100%" }} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
