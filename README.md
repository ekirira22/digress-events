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

    ### CORE DELIVERABLES ###

        A user can see a list of all events on the landing page

        A user can see the latest event on the featured page

        Handle pagination on landing page

        When a user clicks on an event. Redirect that user to the event component. Display details of the event and an option to book the event

        When a user books a ticket. Decrement the available tickets on both the component and the backend and increment the tickets sold. When available tickets == 0 disable the buy ticket button

        Have a booked events component that displays the events that the user has already booked

        Admin component - that can perform CRUD operations on events. Once an event is deleted from this component. It should also be subsequently deleted from the rest of the components

        ADVANCED DELIVERABLES

        A user can search for a ticket.

        A user can filter tickets based on date , venue or both

        Create a dummy payment gateway payment process when a user books a ticket.

## Algorithmic view
 ...

## Relationships
  APP (Parent component) : will be responsible for maintaing of state and prop sharing -> Children(see components)
  

## API Data
Click link below to see API Data
[API LINK]()
