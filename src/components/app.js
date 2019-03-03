import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import { PokemanList } from "./../components";

import "bootstrap/scss/bootstrap.scss";
import "./../assets/scss/main.scss";

export default class App extends Component {
  render(){
    return(
      <Container fluid>
        <h1 className="text-center text-primary">Welcome to Pokedex</h1>
        <Row>
          <Col>
            <PokemanList />
          </Col>
        </Row>
      </Container>
    )
  }
}