# trip-planner-routes
 A react app that allows the user to plan future trips

 ## Setup
 - downlaod or clone repo
 - navigate to project directory: cd trip-planner
 - open app by running in vs code live server: npm run dev

 ## Project Features 
 - user is able to write in a form 

   - name: (what they wish to name the trip i.e Weekend hike)
        
   - date: (the date the trip begins i.e 02/07/2025)
        
   - location: (where the trip will take place i.e Spain)

- once the user has entered information in all the available fields they can click the sumbit button

- this adds a list item to the page and the user can see all the information they have for their trip

- the user also has the option to delete trip information, by clicking the delete button on the list item

- the use has the option to edit the list item by clicking the edit button and either cancelling the edit or saving the edit

- if you reload the page the lists items do not disappear thanks to local storage

 ## Screen Shot
 
<img width="799" alt="trip-planner-updated-pic" src="https://github.com/user-attachments/assets/c97a3e00-513d-4dd8-a5f9-1cd795b5c469" />

## How it works

### App.jsx
  - imports: 
      - Header, ActivityForm, and ActivityList components.
      - useState hook to manage the state.
      - localStorage is used to persist data between sessions.
  
  - state management: 
    - initializes the state 'activities' by loading saved data from localStorage.
    - If no data is found, it initializes with an empty array.

  - functions:
    - addActivity adds a new activity to the list, updates the activities state and saves to localstorage
    - deleteActivity removes activity at a given index and updates localstorage

### ActivityForm.jsx 
  - state management: 
    - text, dates, and location are local states managed with useState. They store the values entered into the form fields.
  
  - event handlers:
    - handleInputOnChange(event):
      - updates the state text, dates, and location based on what the user enters in the input fields

    - handleBtnClick(event):
      - prevents default submission
      - validates fields are filled 
      - calls addActivity() (passed as a prop) to add a new activity 
      - clears input fields

  - Sumbit button is diabled if any of the fields are empty

### ActivityList.jsx
  - props: 
    - activities: and array of activity objects passed from the App component
    - deleteActivity: a function to delete an activity

  - maps through the activities array and renders an <ActivityItem> component for each activity
  - each li is given a key (the index of the activity) to help indentify and manage the li's 

### ActivityItem.jsx
  - props: 
    - tripName, dates, location: Properties of an activity passed from ActivityList.
    - onDelete: A function to delete the specific activity.
    - onEdit: a function which allows you to edit the activity item
  
  - Displays the trip name, dates, and location in a structured format.
  - Includes a delete button that calls the onDelete function when clicked

### WeatherAPI.jsx
 - using useEffect and useSate to call a weather API
 - if the user allows to share their location they get a weather forecast at the top left of their screen

### RotatingBackground.jsx
 - useing useState, useEffect and setTimeout to rotate through an index (array) of images for the hero image

### Application Flow:

Loading Activities:

When the app loads, it initializes the activities state from localStorage.
Adding Activities:

Users fill out the form in ActivityForm and submit it.
The addActivity function in App is called, which updates the activities state and saves the new list to localStorage.
Displaying Activities:

The ActivityList component maps over the activities array and displays each activity using the ActivityItem component.
Deleting Activities:

Clicking the delete button in ActivityItem calls the onDelete function, which invokes deleteActivity in App to remove the activity from the list and localStorage.

There is also a Trip Inspo page where the user can get ideas for future trips

 
