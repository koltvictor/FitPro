import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MealScreen from '../screens/MealScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  const navigation = useNavigation(); // Use the useNavigation hook to access navigation object
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Meal') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Workout') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return  <TouchableOpacity onPress={() => navigation.navigate(route.name)}>
          <Ionicons name={iconName} size={size} color={color} />
        </TouchableOpacity>
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
                  tabStyle: {
            paddingTop: 10,
            paddingBottom: 5, // Adjust this value to change the distance from the bottom of the screen
          },
          style: {
            backgroundColor: 'navy',
            borderTopWidth: 0,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 80, // Adjust this value to change the height of the tab bar
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true, // This will hide the tab bar when the keyboard is shown
        })}
        tabBarPosition="bottom" // Set the tabBarPosition to "bottom" to stick it at the bottom of the screen
        
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Meal" component={MealScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
