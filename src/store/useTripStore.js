import { create } from 'zustand';

// Create Zustand store for managing trips
const useTripStore = create((set) => ({
  // Initial state with predefined trips
  trips: [
    { id: '1', destination: 'Paris', date: '2025-03-01', details: 'A romantic getaway to Paris', participants: [], image: require('../../assets/paris.jpg')},
    { id: '2', destination: 'Tokyo', date: '2025-05-10', details: 'Exploring the vibrant city of Tokyo', participants: [], image: require('../../assets/tokyo_new.jpeg')},
    { id: '3', destination: 'New York', date: '2025-06-15', details: 'Visiting iconic landmarks in New York', participants: [], image: require('../../assets/newyork.jpeg') }, 
  ],

  // Function to add a new trip
  addTrip: (newTrip) => set((state) => ({
    trips: [...state.trips, newTrip],
  })),

  // Function to add a participant to a trip
  addParticipant: (tripId, participantName) => set((state) => ({
    trips: state.trips.map((trip) =>
      trip.id === tripId
        ? { ...trip, participants: [...trip.participants, participantName] }
        : trip
    ),
  })),

  // Function to remove a participant from a trip
  removeParticipant: (tripId, participantName) => set((state) => ({
    trips: state.trips.map((trip) =>
      trip.id === tripId
        ? { ...trip, participants: trip.participants.filter((participant) => participant !== participantName) }
        : trip
    ),
  })),

  // Function to remove a trip from the list
  removeTrip: (tripId) => set((state) => ({
    trips: state.trips.filter((trip) => trip.id !== tripId),
  })),
}));

export default useTripStore;