import { create } from 'zustand';

const useTripStore = create((set) => ({
  trips: [
    { id: '1', destination: 'Paris', date: '2025-03-01', details: 'A romantic getaway to Paris', participants: [], image: require('../../assets/paris.png')},
    { id: '2', destination: 'Tokyo', date: '2025-05-10', details: 'Exploring the vibrant city of Tokyo', participants: [], image: require('../../assets/tokyo_new.jpeg')},
    { id: '3', destination: 'New York', date: '2025-06-15', details: 'Visiting iconic landmarks in New York', participants: [], image: require('../../assets/newyork.jpeg') }, 
  ],

  // Add new trip
  addTrip: (newTrip) => set((state) => ({
    trips: [...state.trips, newTrip],
  })),

  // Add participant to a trip
  addParticipant: (tripId, participantName) => set((state) => ({
    trips: state.trips.map((trip) =>
      trip.id === tripId
        ? { ...trip, participants: [...trip.participants, participantName] }
        : trip
    ),
  })),

  // Remove participant from a trip
  removeParticipant: (tripId, participantName) => set((state) => ({
    trips: state.trips.map((trip) =>
      trip.id === tripId
        ? { ...trip, participants: trip.participants.filter((participant) => participant !== participantName) }
        : trip
    ),
  })),

  // Remove a trip from the list
  removeTrip: (tripId) => set((state) => ({
    trips: state.trips.filter((trip) => trip.id !== tripId),
  })),
}));

export default useTripStore;
