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

+ Search for Venues :     GET	venues	search
+ Get Venue Categories:   GET	venues	categories
+ Get Details of a Venue: GET	venues	details
+ Get a Venue’s Tips:     GET	venues	tips

![][model]


## App Design.

### Component catalogue.

In the stories => index, there are sample of the data return from the queries. 
+ sampleVenue
+ sampleTip
+ sampleDetailVenue

I have created stories for:
+ storiesOf("Home Page/VenueCard", module)
+ storiesOf("Home Page/FilterControls", module)
+ storiesOf("Home Page/Header", module)
+ storiesOf("Home Page/VenueList", module)
+ storiesOf("Venue Details Page/VenueDetails", module)
+ storiesOf("Venue Details Page/VenueHeader", module)
+ storiesOf("Venue Tip Page/VenueTip", module)


![][Storybook](./Storybook.PNG)

### UI Design.

![][Login]
>Login Page powered by Okta. There is still work to do on the application header and what is visible at this point

![][homePage]
>Home Page of the application. Ideally, this would let the user chose a location from assets/data and also a Category to do the Search. At this point, it is unfortunately still static.

![][ListPage]
>List of all the Venues in the Search, The filter for the name is working well. However the filter for the sub-categories is still a work in progress. The Add to Favorite button is working well as expected.

![][MapPage]
>Map page with the venues represented on the Map. Popup with icon. Link on name with redirection to the Venue Detail.

![][VenueDetails]
>Venue Details with best picture displayed. The latest tip showing if wanted.


### Routing.

The Route toward the Okta Login Widget

 + Route path="/" exact component={Home} /
 + Route path="/implicit/callback" component={LoginCallback} /
 + Route path="/login" exact component={CustomLoginComponent} /

The secureRoute after the Okta Authentication:

 + SecureRoute exact path="/tips/form" component={AddVenueTipPage} /
 + SecureRoute path="/tips/:id" component={VenueTipPage} /
 + SecureRoute exact path="/venues/favorites" component={FavoriteVenuesPage} /
 + SecureRoute path="/venues/:id" component={VenuePage} /
 + SecureRoute path="/mapView" component={MapPage} /
 + SecureRoute path="/list" component={ListPage} /
 + SecureRoute path="/home" component={HomePage} /


## React feature set.

+ useState and useEffect hooks - src/components/templateVenueListPage.js
+ useContext hook - src/components/tipForm.js
+ Extended Link - src/components/templateVenuePage.js
+ Programmatic navigation - src/pages/VenueDetailsPage.js
+ jsx - src/components/okta/Profile.jsx


## Independent learning.

Okta Authentication:
https://dev.to/vic3king/building-a-spa-with-react-and-okta-for-authentication-4m85


Leaflet Map with React:
https://medium.com/javascript-in-plain-english/leaflet-map-with-react-part-i-4ef4ecbdcc1b


[model]: ./model.PNG
[Storybook]: ./Storybook.PNG
[Login]: ./Login.PNG
[homePage]: ./HomePage.PNG
[ListPage]: ./ListPage.PNG
[MapPage]: ./MapPage.PNG
[VenueDetails]: ./VenueDetails.PNG