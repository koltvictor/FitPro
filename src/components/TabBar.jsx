import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MealScreen from '../screens/MealScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <View style={{ height: '100%' }}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
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

          return       (
          <Ionicons name={iconName} size={30} style={{ height: '100%' }} color={color} />
        )
      
        },
        tabBarActiveTintColor: 'lightgreen',
        tabBarInactiveTintColor: 'lightgrey',
        tabBarStyle: {
          backgroundColor: 'navy',
          padding: 20,
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },

        })}  
              
    >
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Meal" component={MealScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Workout" component={WorkoutScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
    </View>
  );
}
