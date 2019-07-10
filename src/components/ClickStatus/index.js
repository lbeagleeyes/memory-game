import React from "react";
import "./style.css";

function ClickStatus(props) {
  return (
    <div className="container text-center">
      <br></br>
       <h2>{props.value}</h2>
    </div>
  );
}

export default ClickStatus;
