import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import useTripStore from "../store/useTripStore";

const ParticipantsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { tripId } = route?.params || {};

  const { trips, addParticipant, removeParticipant } = useTripStore();
  const [name, setName] = useState("");
  const [trip, setTrip] = useState(null);

  // Fetch the trip details when the component mounts or trips/tripId changes
  useEffect(() => {
    if (tripId) {
      const foundTrip = trips.find((trip) => trip.id === tripId);
      setTrip(foundTrip);
    }
  }, [trips, tripId]);

  // Function to add a new participant to the trip
  const addNewParticipant = () => {
    if (name.trim().length === 0 || !tripId) return;
    addParticipant(tripId, name);
    setName("");
  };

  // Function to remove a participant from the trip
  const removeParticipantHandler = (participantName) => {
    if (!tripId) return;
    removeParticipant(tripId, participantName);
  };

  // Function to navigate back to the Home screen
  const handleDone = () => {
    navigation.navigate("Home"); // Navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.header}>Manage Participants</Text>

      {/* Input field for participant name */}
      <TextInput
        style={styles.input}
        placeholder="Enter participant name"
        value={name}
        onChangeText={setName}
      />

      {/* Button to add a new participant */}
      <Button title="Add Participant" onPress={addNewParticipant} />

      {/* List of participants */}
      {trip && trip.participants?.length > 0 ? (
        <FlatList
          data={trip.participants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.participantItem}>
              <Text style={styles.participantText}>{item}</Text>
              <Button
                title="Remove"
                onPress={() => removeParticipantHandler(item)}
              />
            </View>
          )}
        />
      ) : (
        <Text>No participants yet</Text>
      )}

      {/* "Done" Button to navigate back */}
      <Button title="Done" onPress={handleDone} color="green" />
    </View>
  );
};

// Styles for the ParticipantsScreen components
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
  participantItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  participantText: {
    fontSize: 16,
  },
});

export default ParticipantsScreen;
