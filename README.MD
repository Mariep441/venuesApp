# Project - ReactJS app.

Name: Marie-Pierre Beaudoin

## Overview.
This is an app based on the Movies app with a twist; It has been refactor to use the FourSquare API.

List of new features
 
 + Various Changes into the Venues to integrate the new data points
 + Venues Details with the best photo of each venue
 + Show latest tip
 + Leaflet Map with PopUp to visualise each venues
 + Authentication by Okta

## Setup requirements.

All the credentials, keys, passwords and username will be submitted on Moodle.

## API Data Model.

All the documentation of the endpoints use in this project are described in the Foursquare Documentation:

https://developer.foursquare.com/docs/places-api/endpoints/

In the stories => index, there are sample of the data return from the queries.

+ Search for Venues :     GET	venues	search
+ Get Venue Categories:   GET	venues	categories
+ Get Details of a Venue: GET	venues	details
+ Get a Venue’s Tips:     GET	venues	tips

![][model]


## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][image]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /blogs - displays all published blogs.
+ /blogs/:id (private) - detail view of a particular blog.
+ /blogs/:id/comments (private) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/fileA.js
+ useContext hook - src/components/fileb.js
+ Extended Link - src/components/fileA.js
+ Programmatic navigation - src/pages/fileC.js
+ etc
+ etc
+ etc

## Independent learning.

Okta Authentication:
https://dev.to/vic3king/building-a-spa-with-react-and-okta-for-authentication-4m85


Leaflet Map with React:
https://medium.com/javascript-in-plain-english/leaflet-map-with-react-part-i-4ef4ecbdcc1b


[model]: ./model.png
[image]: ./images/travel.png
[stories]: ./storybook.png