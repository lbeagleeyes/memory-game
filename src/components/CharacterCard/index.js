import React, { Component } from "react";
import "./style.css";

class CharacterCard extends Component {

  state = {
    clicked: "false"
  }

  render() {
    return (
      <div className="card" id={this.props.id} onClick={ () => {
        this.props.handleClick(this.props.id);
      }}>
        <div className="img-container">
          <img
            alt={this.props.name}
            src={this.props.image}
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <span className="charName">{this.props.name}</span> - {this.props.occupation}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
