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







