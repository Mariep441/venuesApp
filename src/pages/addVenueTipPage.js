import React from "react";
import PageTemplate from "../components/templateVenuePage";
import TipForm from '../components/tipForm'

const TipFormPage = props => {

  return (
      <PageTemplate venue={props.location.state.venue}>
          <TipForm venue={props.location.state.venue} />
      </PageTemplate>
  );
};
export default TipFormPage;