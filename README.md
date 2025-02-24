User Manual for the Trip Planner App

Here is the demo video:

[Click here to watch the demo video](https://github.com/Abhi00028/TripPlannerGroup/raw/master/assets/Demo.mp4)



Overview:
The Trip Planner app allows users to create, manage, and track their trips and the participants associated with them. Users can:

-Add and view trips with details.
-Add and remove participants for each trip.
-View a summary of the trip, including participants and details.


How to build your own?

1. Clone this repo or download the zip
   - Extract Zip file
   - Open folder in IDE
   
3. Install all the dependencies
   - npm i or npm install
     
4. Run any of the following commands to start the application
   -npm run android
   -npm expo start
   -npm start -- --reset-cache

5. Test the different functions of the App and tweak code to obeserve new changes.

Features:
1.	Home Screen:
  o	Displays a list of all trips sorted by date.
  o	Users can add a new trip by pressing the "Add New Trip" button.
  o	Each trip has an option to view the trip summary and manage participants.
  o	A delete button allows users to remove trips from the list.

2.	Add New Trip Screen (TripDetailsScreen):

  o	Users can add a new trip by entering the destination, date, and trip details.
  o	A save button saves the trip and navigates to the ParticipantsScreen to manage participants.

3.	Manage Participants Screen (ParticipantsScreen):

  o	Users can add participants by entering their name and pressing the "Add Participant" button.
  o	Users can remove participants from the list.
  o	Once done, users can press the "Done" button to return to the home screen.

4.	Trip Summary Screen (TripSummaryScreen):

  o	Displays detailed information about the trip, including destination, date, details, and participants.
  o	Users can add comments about the trip.
  o	A "Save Comment" button saves the comment and navigates back to the home screen.

App Navigation:

  •	Home Screen: The starting point of the app where you can view and manage trips.
  •	Add New Trip: Clicking on "Add New Trip" navigates to the screen for entering trip details.
  •	Participants: After creating a trip, you can manage participants by navigating to the Participants screen.
  •	Trip Summary: View the detailed summary of any selected trip.

  How to Use:
1.	Adding a New Trip:
  o	Navigate to the Home screen.
  o	Click the "Add New Trip" button.
  o	Enter the trip details (destination, date, description).
  o	Click "Save & Manage Participants" to save the trip and navigate to the Participants screen.
2.	Adding Participants:
  o	In the Participants screen, enter the name of a participant.
  o	Press "Add Participant" to add them to the trip.
  o	To remove a participant, click the "Remove" button next to their name.
3.	Viewing Trip Summary:
  o	On the Home screen, click on a trip to view its summary, including the destination, date, and participant list.
  o	Add additional comments about the trip.
  o	Save your comments and return to the Home screen.
4.	Deleting a Trip:

  o	On the Home screen, click the trash icon next to a trip to delete it from the list.

Use of Flexbox Layouts:

  •	The app consistently uses Flexbox to create flexible layouts in all screens (e.g., centering elements, distributing space   between trip details, participants, etc.). The flex and flexDirection properties are used to manage the layout across different devices.
  •	Example: In the HomeScreen, the tripContainer uses a row layout to display the image and text side by side.

3. Components Used:

   The app employs various React Native components to construct the user interface:
  •	Text: Display text such as headings, labels, and content.
  •	View: Used as a container for other components and layout.
  •	TextInput: Used for user input (e.g., adding new trip details, entering participant names).
  •	Button: Buttons used for actions like saving details, adding participants, and navigating between screens.
  •	FlatList: Efficiently displays a list of items (e.g., trip list, participants list) with support for item rendering and          optimizing performance.
  •	Image: Displays images, such as the default city image or custom images for trips.

4. Event Handling:

  •	onPress: Used for handling button presses, such as saving a trip, navigating between screens, or deleting a trip.
  •   onChangeText: Used in TextInput components to capture user input (e.g., destination, date, participant names).
  •	addTrip, removeTrip, addParticipant, removeParticipant: Functions in the Zustand store handle state changes (e.g., adding/removing trips and participants).

5. State Management:

  •	Zustand is used for global state management. The app stores trips, participants, and trip-related actions like adding/removing trips and participants in a centralized state (useTripStore).
  •	When a trip is added, removed, or participants are updated, the app reflects these changes in real-time through Zustand state updates.

6. Navigation:

  •	The app uses react-navigation with a Stack Navigator for navigating between screens:
  o	HomeScreen → TripDetailsScreen → ParticipantsScreen
  o	TripSummaryScreen is accessed from the HomeScreen when a user selects a trip.
  o	All screens are part of a stack, which allows for navigating forward and backward.

7. Object-Oriented Programming (OOP):

  •	State Store: Zustand's store management can be considered a simple application of the OOP principle of encapsulating state and behavior.
  •	State Mutations: Methods for adding/removing trips and participants represent methods of an object (useTripStore store) that encapsulate related behavior.
  •	Component Structure: Each screen is organized into a component, which follows the principle of separation of concerns and modularity.



Developers 

Abhishek Bhardwaj
kavreet kaur
Onyeka Ofojetu
Vinyake rattan 
Onolemon





