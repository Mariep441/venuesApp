import React from "react";

export default ({ tip }) => {
  return (
    <>
      <p>Review By: {tip.user.firstName} </p>
      <p>{tip.text} </p>
    </>
  );
};