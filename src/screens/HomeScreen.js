import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useTripStore from "../store/useTripStore";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { trips, removeTrip } = useTripStore();

  // Sort trips by date (earliest first) without mutating state
  const sortedTrips = [...trips].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.header}>Trip Planner</Text>

      {/* Button to navigate to TripDetails screen */}
      <Button
        title="Add New Trip"
        onPress={() => navigation.navigate("TripDetails")}
      />

      {/* List of trips */}
      <FlatList
        data={sortedTrips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tripContainer}>
            {/* Display Image */}
            <Image
              source={item.image || require("../../assets/default_city.jpg")} // Use local assets
              style={styles.cityImage}
            />

            {/* TouchableOpacity to navigate to TripSummary screen */}
            <TouchableOpacity
              style={styles.tripItem}
              onPress={() =>
                navigation.navigate("TripSummary", { tripId: item.id })
              }
            >
              <Text style={styles.destination}>{item.destination}</Text>
              <Text style={styles.date}>Date: {item.date}</Text>
              <Text style={styles.details}>{item.details}</Text>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity
              onPress={() => removeTrip(item.id)}
              style={styles.deleteButton}
            >
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Styles for the HomeScreen components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff", // Light background
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tripContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 10,
    elevation: 3, // Adds shadow on Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cityImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  tripItem: {
    flex: 1,
  },
  destination: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 16,
    marginVertical: 5,
    color: "#666",
  },
  details: {
    fontSize: 14,
    color: "gray",
  },
  deleteButton: {
    padding: 8,
  },
});

export default HomeScreen;
