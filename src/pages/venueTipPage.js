import React from "react";
import PageTemplate from '../components/templateVenuePage'
import VenueTip from "../components/venueTip";

const VenueTipPage = (props) => {
  return (
      <PageTemplate venue={props.location.state.venue}>
        <VenueTip tip={props.location.state.tip} /> 
      </PageTemplate>
  );
};

export default VenueTipPage;