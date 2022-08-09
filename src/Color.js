import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Color({hex, color, history}) { // history is a prop that is passed in from the Route component
  //console.log(hex, color, "hey")
  if (!hex) { // if hex is undefined, redirect to /colors
    history.push("/colors"); // in v6 we use Navigate
  }

  return ( // if hex is defined, render the color
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
