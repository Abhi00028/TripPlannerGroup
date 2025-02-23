import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useTripStore from '../store/useTripStore'; // Import Zustand store
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TripSummaryScreen = () => {
  const { tripId } = useRoute().params; // Get tripId from navigation
  const { trips } = useTripStore();
  
  const [trip, setTrip] = useState(null);
  const [comment, setComment] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const foundTrip = trips.find((t) => t.id === tripId);
    setTrip(foundTrip);
  }, [trips, tripId]);
  const handleSaveComment = () => {
    Alert.alert("Success", "Comment saved!", [{ text: "OK", onPress: () => navigation.navigate('Home') }]);
  };
  if (!trip) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Trip Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Trip Summary</Text>
      <Text style={styles.label}>Destination:</Text>
      <Text style={styles.value}>{trip.destination}</Text>

      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{trip.date}</Text>

      <Text style={styles.label}>Details:</Text>
      <Text style={styles.value}>{trip.details}</Text>

      <Text style={styles.label}>Participants:</Text>
      {trip.participants.length > 0 ? (
        <FlatList
          data={trip.participants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.participant}>{item}</Text>}
        />
      ) : (
        <Text style={styles.noData}>No participants added</Text>
      )}

      <Text style={styles.label}>Additional Comments:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your comments..."
        value={comment}
        onChangeText={setComment}
      />

<Button title="Save Comment" onPress={handleSaveComment} />
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  participant: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 4,
  },
  noData: {
    fontSize: 16,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default TripSummaryScreen;
