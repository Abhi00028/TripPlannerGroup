import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useTripStore from "../store/useTripStore"; // Import Zustand store

const TripDetailsScreen = () => {
  const navigation = useNavigation();
  const { addTrip } = useTripStore();

  // State for new trip details
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  // Function to handle saving the new trip
  const handleSave = () => {
    if (!destination || !date || !details) {
      alert("All fields are required");
      return;
    }

    // Validate date format (simple validation example)
    const isValidDate = !isNaN(Date.parse(date));
    if (!isValidDate) {
      alert("Please enter a valid date");
      return;
    }

    const newTrip = {
      id: (Math.random() * 1000).toString(), // Generate a unique ID
      destination,
      date,
      details,
      participants: [], // Ensure the trip has a participants array
    };

    addTrip(newTrip); // Add trip to Zustand store

    // Navigate to ParticipantsScreen with tripId
    navigation.navigate("Participants", { tripId: newTrip.id });
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.header}>Add a New Trip</Text>

      {/* Input field for destination */}
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />

      {/* Simple Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      {/* Input field for trip details */}
      <TextInput
        style={styles.input}
        placeholder="Details"
        value={details}
        onChangeText={setDetails}
      />

      {/* Button to save the trip and navigate to Participants screen */}
      <Button title="Save & Manage Participants" onPress={handleSave} />
    </View>
  );
};

// Styles for the TripDetailsScreen components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default TripDetailsScreen;
