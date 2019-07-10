import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import { Container, Row, Col } from "./components/Grid";

import "./App.css";
import ClickStatus from "./components/ClickStatus";
import Score from "./components/Score";

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
      <div className="App-header">
        <Container>
          <Row>
            <Col size="md-3">
              <ClickStatus value={this.state.status}></ClickStatus>
            </Col>
            <Col size="md-6">
              <Title>
              </Title>
            </Col>
            <Col size="md-3">
              <Score score={this.state.score} topScore={this.state.topScore}></Score>
            </Col>
          </Row>
        </Container>
        <div className="App">
          <Wrapper>
            {this.state.friends.map((character) => {
              return <CharacterCard key={character.id} id={character.id} name={character.name} image={character.image} occupation={character.occupation} location={character.location} handleClick={this.handleClick} />
            })}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
