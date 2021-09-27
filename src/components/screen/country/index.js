import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import AllCountry from "../allCountry/index";
import Register from "../register/index";

const update = () => {
  //   return()
  console.log("hittttt");
};

function Country(props) {
  return (
    <div>
      <Link to={"/country/" + props.toChild.country}>
        <button onClick={() => props.sendToParent([props.toChild])}>
          view
        </button>
      </Link>
    </div>
  );
}

export default Country;
