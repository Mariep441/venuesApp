import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MapPage from "./pages/mapPage";
import VenuePage from './pages/venueDetailsPage';
import FavoriteVenuesPage from './pages/favoritesVenuesPage';
import VenueTipPage from "./pages/venueTipPage";
import SiteHeader from './components/siteHeader';
import VenuesContextProvider from "./contexts/venuesContext";
import CategoriesContextProvider from "./contexts/categoriesContext";
import AddVenueTipPage from './pages/addVenueTipPage';

const App = () => {
    return (
      <BrowserRouter>
      <div className="jumbotron">
      <SiteHeader /> 
        <div className="container-fluid">
          <VenuesContextProvider>
            <CategoriesContextProvider> 
              <Switch>
                <Route exact path="/tips/form" component={AddVenueTipPage} />   
                <Route path="/tips/:id" component={VenueTipPage} /> 
                <Route exact path="/venues/favorites" component={FavoriteVenuesPage} />
                <Route path="/venues/:id" component={VenuePage} />
                <Route path="/mapView" component={MapPage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </CategoriesContextProvider>
          </VenuesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));