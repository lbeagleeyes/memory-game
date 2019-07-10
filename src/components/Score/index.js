import React from "react";
import "./style.css";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Score(props) {
  return (
    <div className="container">
      <h3>Score: {props.score} </h3>
      <h3>Top Score: {props.topScore} </h3>
    </div>
  );
}

export default Score;