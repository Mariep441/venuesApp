import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, useHistory, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import MapPage from "./pages/mapPage";
import VenuePage from './pages/venueDetailsPage';
import FavoriteVenuesPage from './pages/favoritesVenuesPage';
import VenueTipPage from "./pages/venueTipPage";
import SiteHeader from './components/siteHeader';
import VenuesContextProvider from "./contexts/venuesContext";
import CategoriesContextProvider from "./contexts/categoriesContext";
import AddVenueTipPage from './pages/addVenueTipPage';


import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './components/okta/config';
import CustomLoginComponent from './components/okta/Login';
import Navbar from './components/okta/NavBar';
import Profile from './components/okta/Profile';
import Home from './components/okta/Home';
import { Container } from 'semantic-ui-react';

const HasAccessToRouter = () => {
  const history = useHistory(); // example from react-router

  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push('/login');
  };

  return (
    <Security
      {...config}
      onAuthRequired={customAuthHandler}
    >
      <Navbar />
      <Container text style={{ marginTop: '2em' }}>
        <Route path="/" exact component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/login" exact component={CustomLoginComponent} />
        <SecureRoute path="/profile" component={Profile} />
          <div className="jumbotron">
              <SiteHeader /> 
                  <div className="container-fluid">
                      <VenuesContextProvider>
                      <CategoriesContextProvider> 
                        <Switch>      
                            <SecureRoute exact path="/tips/form" component={AddVenueTipPage} />   
                            <SecureRoute path="/tips/:id" component={VenueTipPage} /> 
                            <SecureRoute exact path="/venues/favorites" component={FavoriteVenuesPage} />
                            <SecureRoute path="/venues/:id" component={VenuePage} />
                            <SecureRoute path="/mapView" component={MapPage} />
                            <SecureRoute path="/list" component={ListPage} />
                            <SecureRoute path="/home" component={HomePage} />
                        </Switch>
                      </CategoriesContextProvider>
                      </VenuesContextProvider>
                    </div>
            </div>
      </Container>
    </Security>
  );
};

const App = () => {
    return (
      <BrowserRouter>
         <HasAccessToRouter />
    </BrowserRouter>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));