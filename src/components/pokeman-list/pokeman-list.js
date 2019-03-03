import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { PokemanCard, Filter, Search } from "./../../components";
import { HOST } from "./../../utils";
import Axios from "axios";

export class PokemanList extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemanList: [],
      nextListUrl: null,
      error: null
    }

    this.getPokemanList = this.getPokemanList.bind(this);
  }
  
  componentDidMount(){
    this.getPokemanList();
  }

  getPokemanList = () => {
    Axios.get(HOST)
      .then( res => {
        if(res.data){
          const nextUrl = res.data.next ? res.data.next : null;
          const data = res.data.results ? res.data.results : [];
          this.setState({
            nextListUrl: nextUrl,
            pokemanList: data
          })
        }
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }

  render(){
    const { pokemanList } = this.state;
    return(
      <Container className="w-100 d-flex flex-column">
        <Row>
          <Col xs="12" md="8" className="my-2 flex-start">
            <Search />
          </Col>
          <Col xs="12" md="4" className="my-2 flex-end">
            <Filter />
          </Col>
        </Row>
        <Row>
          { pokemanList.map( (pokeman, index )=> {
            return(
              <Col key={index} xs="6" md="3" lg="2">
                <PokemanCard {...pokeman} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}