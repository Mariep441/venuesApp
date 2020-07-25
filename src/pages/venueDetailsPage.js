import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import VenueDetails from "../components/venueDetails";
import PageTemplate from "../components/templateVenuePage";
import VenueTips from "../components/venueTips";
import useVenue from "../hooks/useVenue";

const VenuePage = props => {
  const { id } = props.match.params;
  const [venue] = useVenue(id)
  return (
    <>
    {venue ? (
      <>
        <PageTemplate venue={venue}>
          <VenueDetails venue={venue} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/tips") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/venues/${id}/tips`}
              >
                Show Tips (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/venues/${id}`}
              >
                Hide Tips
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/venues/:id/tips`}
          render={props => <VenueTips venue={venue} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for venue details</p>
    )}
  </>
  );
};

export default withRouter(VenuePage);