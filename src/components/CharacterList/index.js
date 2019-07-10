import React from "react";
import "./style.css";
import friends from "../../friends.json";

class CharacterList extends React.Component {

  state = {
    friends: friends,
    unclickedFriends: [{ id: "" }],
    score: 0
  }

  handleClick(id) {
    const unclicked = this.state.unclickedFriends.filter(friend => friend.id !== id);
    if (unclicked.length === this.state.unclickedFriends.length) {
      //character had already been clicked - game over
      this.setState({ score: 0 });
      //restart game
    } else {
      this.setState({ unclickedFriends: unclicked });
      const newScore = this.state.score + 1;
      this.setState({ score: newScore});
      if(newScore)
    }
  }

  render() {
    return (
      this.state.friends.map(friend => (
        <div className="card" onClick={() => this.handleClick(friend.id)} >
          <div className="img-container">
            <img alt={friend.name} src={friend.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {friend.name}
              </li>
              <li>
                <strong>Occupation:</strong> {friend.occupation}
              </li>
              <li>
                <strong>Address:</strong> {friend.location}
              </li>
            </ul>
          </div>
          {/* <span id={friend.id} className="remove" onClick={()=>this.handleRemove(friend.id)}>𝘅</span> */}
        </div>
      ))
    );

  };
}


export default CharacterList;
