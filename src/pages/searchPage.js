import React from "react";
import PageTemplate from "../components/templateVenuePage";
import Search from '../components/search'

const SearchPage = props => {

  return (
      <PageTemplate venue={props.location.state.venue}>
          <TipForm venue={props.location.state.venue} />
      </PageTemplate>
  );
};
export default SearchPage;