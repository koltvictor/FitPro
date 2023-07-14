import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import MealsScreen from '../screens/MealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused? 'person' : 'person-outline';
            } else if (route.name === 'Workout') {
              iconName = focused? 'barbell' : 'barbell-outline';
            } else if (route.name === 'Meals') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
          tabBarStyle: {
            backgroundColor: "blue",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>

  );
};

export default App;

