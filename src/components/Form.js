import React, { Component } from "react";

const Form = (props) => {
  return (
    <form className="Form" onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
