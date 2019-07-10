import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";
import ClickStatus from "../ClickStatus";
import Score from "../Score";

function Title(props) {
  return (
    <div className="header">
    <Container>
      <Row>
        <Col size="md-12"><h1>Memory Game</h1></Col>
      </Row>
      <Row>
        <Col size="md-3">
          <ClickStatus value={props.status}></ClickStatus>
        </Col>
        <Col size="md-6">
          <div className="container text-center">
            <p>
              Click on every character only once!
            </p>
          </div>
        </Col>
        <Col size="md-3">
          <Score score={props.score} topScore={props.topScore}></Score>
        </Col>
      </Row>
    </Container>
    </div>


  );
}

export default Title;
