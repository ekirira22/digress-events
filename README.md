# Digress-Events
## Authors
    1. Eric Maranga
    2. Diana Tuei
    3. Esther Wanjiku
    4. Emily Matoke
    5. Elvis Momanyi

## Installation 
  1. Git clone this repository to your working directory
  2. Download tailwind dependencies. This project runs on tailwind css and vanilla JS
  3. `npm install` to install all dependecies needed for this project
  4. Launch project from live server using `npm start` to run on port 3000
  5. Run `npm run watch` to track live changes to tailwind css
  6. Run `npm serve` to watch db.json file on port 4000
     **NB:**
     Whenever you make a change to css remember to compile it using  npm run build-css if you're not running `npm run watch` . See tailwind.config.js for more
     
## Tech Stack
HTML,Tailwind CSS, Vanilla JS, React JS

## User Stories

### CORE DELIVERABLES
1. A user can see a list of all events on the landing page

2. A user can see the latest event on the featured page

3. Handle pagination on landing page

4. When a user clicks on an event. Redirect that user to the event component. Display details of the event and an option to book the event

5. When a user books a ticket. Decrement the available tickets on both the component and the backend and increment the tickets sold. When available tickets == 0 disable the buy ticket button

6. Have a booked events component that displays the events that the user has already booked

7. Admin component - that can perform CRUD operations on events. Once an event is deleted from this component. It should also be subsequently deleted from the rest of the components

### ADVANCED DELIVERABLES

1. A user can search for a ticket.

2. A user can filter tickets based on date , venue or both

3. Create a dummy payment gateway payment process when a user books a ticket.

4. Removes a ticket from available tickets once it is sold out
5. Increments the bought 

## Algorithmic view
 ...

## Relationships
 - App.js (Parent component) : `will be responsible for maintaing of state and prop sharing -> Children(see components)`
    -NavBar

    **- HomePage(Landing Page, Featured Event) --> Advanced Deliverable

    - Events.js (Event List with Pagination) >> /tickets
        - EventDetail.js (Displays the event card) >> /tickets/1
    - Admin.js (CRUD Functions on events)
    - About.js

  

## API Data
Click link below to see API Data
[API LINK]()
