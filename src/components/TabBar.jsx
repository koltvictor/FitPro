import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MealScreen from '../screens/MealScreen'
import WorkoutScreen from '../screens/WorkoutScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function TabBar() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === "Profile") {
            iconName = focused ? "person" : "person-outline"
          } else if(route.name === "Meal") {
            iconName = focused ? "restaurant" : "restaurant-outline"
          } else if(route.name === "Workout") {
            iconName = focused ? "fitness" : "fitness-outline"
          }
          else if(route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline"}
            return (
              <TouchableOpacity>
                <Ionicons name={iconName} size={size} color={color} />

              </TouchableOpacity>
            )
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      }
      )}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} onPress={console.log("clicked")} />
      <Tab.Screen name="Meal" component={MealScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  )
}