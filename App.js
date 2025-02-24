// Importing necessary components and libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import TripDetailsScreen from "./src/screens/TripDetailsScreen";
import TripSummaryScreen from "./src/screens/TripSummaryScreen";
import ParticipantsScreen from "./src/screens/ParticipantsScreen";
import "react-native-gesture-handler";

// Create a stack navigator instance
const Stack = createStackNavigator();

const App = () => {
  return (
    // Wrapping everything inside NavigationContainer to enable navigation
    <NavigationContainer>
      {/* Setting up the Stack Navigator */}
      <Stack.Navigator>
        {/* Home Screen: This will be the first screen when the app is opened */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Trip Summary Screen: This screen will show the details of a selected trip */}
        <Stack.Screen name="TripSummary" component={TripSummaryScreen} />

        {/* Trip Details Screen: Screen where user enters details of a new trip */}
        <Stack.Screen name="TripDetails" component={TripDetailsScreen} />

        {/* Participants Screen: Screen to manage participants for a specific trip */}
        <Stack.Screen name="Participants" component={ParticipantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; // its an entry point to the app
