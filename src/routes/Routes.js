import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealScreen from "../screens/MealScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRoute="Splash">
      <Stack.Screen name="Splash" options={{ headerShown: false }}>
        {(props) => <SplashScreen {...props} navigation={props.navigation} />}
      </Stack.Screen>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Questions"
        component={QuestionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Meal" component={MealScreen} />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  );
}
