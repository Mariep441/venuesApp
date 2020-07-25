import React, {useContext } from "react";
import "./tipForm.css";
import useForm from "react-hook-form";
import {VenuesContext} from '../../contexts/venuesContext'
import { withRouter } from "react-router-dom";

const TipForm = ({ venue, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(VenuesContext);

  const onSubmit = data => {
    context.addTip(venue, data)
    history.push("/venues/favorites");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your tip</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={venue.tip ? venue.tip.user.firstName : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={venue.tip ? venue.tip.text : ""}
          name="text"
          ref={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(TipForm);