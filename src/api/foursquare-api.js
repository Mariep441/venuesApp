import React, { useContext } from "react";
import { CategoriesContext } from '../contexts/categoriesContext';
import StubAPI from "../api/stubAPI";
 
 let test=StubAPI.getCategory();
 console.log(test);

let categoryId = "4d4b7104d754a06370d81259";

let location = "Luxembourg,LU";


 
 export const getVenues = () => {
    return fetch(
      `https://api.foursquare.com/v2/venues/search?near=${location}&categoryId=${categoryId}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20190101`
      )
      .then(results => results.json())
      .then(data => data.response.venues)
  };

  export const getVenue = id => {
    return fetch(
      `https://api.foursquare.com/v2/venues/${id}?&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20190101`)
      .then(res => res.json())
      .then(data => data.response.venue);
  };

  export const getVenuePhotos = id => {
    return fetch(
      `https://api.foursquare.com/v2/venues/${id}?&photos&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20190101`)
      .then(res => res.json())
      .then(data => data.response.venue.photos);
  };

  
  export const getCategories = () => {
    return fetch(
      `https://api.foursquare.com/v2/venues/categories?&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20190101`)
      
      .then(res => res.json())
      .then(data => data.response.categories)

  };


  export const getSubCategories = () => {
    return fetch(
      `https://api.foursquare.com/v2/venues/categories?&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20190101`)
      

      .then(res => res.json())
      .then(data => data.response.categories[0].categories) 
  };


  export const getVenueTips = id => {
    return fetch(
      `https://api.foursquare.com/v2/venues/${id}?/tips&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20190101`)
      .then(res => res.json())
      .then(data => data.response.venue.tips.groups);
  };