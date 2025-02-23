import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTripStore from '../store/useTripStore';
import { MaterialIcons } from '@expo/vector-icons'; // ✅ Import delete icon

const HomeScreen = () => {
  const navigation = useNavigation();
  const { trips, removeTrip } = useTripStore(); // ✅ Access removeTrip function
// Sort trips by date in ascending order (earliest first)
const sortedTrips = trips.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trip Planner</Text>
      <Button title="Add New Trip" onPress={() => navigation.navigate('TripDetails')} />

      <FlatList 
        data={sortedTrips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tripContainer}>
            <TouchableOpacity
              style={styles.tripItem}
              onPress={() => navigation.navigate('TripSummary', { tripId: item.id })}
            >
              <Text style={styles.destination}>{item.destination}</Text>
              <Text style={styles.date}>Date: {item.date}</Text>
              <Text style={styles.details}>{item.details}</Text>
            </TouchableOpacity>

            {/* ✅ Delete Button */}
            <TouchableOpacity onPress={() => removeTrip(item.id)} style={styles.deleteButton}>
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tripContainer: {
    flexDirection: 'row', // ✅ Arrange items in a row (Trip Info + Delete Button)
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  tripItem: {
    flex: 1, // ✅ Takes up all available space
  },
  destination: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
  deleteButton: {
    padding: 8,
  },
});

export default HomeScreen;
