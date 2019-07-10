import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import "./App.css";


class App extends Component {

  state = {
    friends: friends,
    unclickedFriends: friends,
    score: 0,
    topScore: 0,
    status: ""
  };

  handleClick = (id) => {
    console.log("Clicked in apps called: " + id);
    const unclicked = this.state.unclickedFriends.filter(friend => friend.id !== id);

    if (unclicked.length === this.state.unclickedFriends.length) {
      //character had already been clicked - game over
      this.setState({ status: "Incorrect!" });
      this.restartGame();
    } else {
      //correct answer
      let newScore = this.state.score + 1;
      this.setState({
        unclickedFriends: unclicked,
        status: "Correct!",
        score: newScore
      });

      //update top score if needed
      if (newScore > this.state.topScore) {
        this.setState({ topScore: newScore })
      }
      //Check if win
      if (newScore === friends.length) {
        this.setState({ status: "You won!" });
        this.restartGame();
      }
    }
    this.sortCharacters();
  };

  restartGame() {
    this.setState({
      score: 0,
      unclickedFriends: friends
    });
    this.sortCharacters();
  }

  sortCharacters() {
    const sortedFriends = this.state.friends.sort(() => Math.random() - 0.5);
    this.setState({ friends: sortedFriends });
  }

  render() {
    return (
      <React.Fragment>
          <Title status={this.state.status} score={this.state.score} topScore={this.state.topScore}>
          </Title>

          <Wrapper>
            {this.state.friends.map((character) => {
              return <CharacterCard key={character.id} id={character.id} name={character.name} image={character.image} occupation={character.occupation} location={character.location} handleClick={this.handleClick} />
            })}
          </Wrapper>


      </React.Fragment>
    );
  }
}

export default App;
