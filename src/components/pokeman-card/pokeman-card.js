import React, { Component } from "react";
import { Card, CardImg, CardTitle,CardImgOverlay } from "reactstrap";
import Axios from "axios";

export class PokemanCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemanData: {}
    }
  }
  componentDidMount(){
    this.getPokemanInfo();
  }

  getPokemanInfo = () => {
    const { url } = this.props
    Axios.get(url)
      .then(res => {
        const data = res.data ? res.data : {};
        this.setState({
          pokemanData: data
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }

  render(){
    const { pokemanData } = this.state;
    const image = pokemanData && pokemanData.sprites && pokemanData.sprites.front_default;
    return(
      <Card className="border-0 bg-primary mb-4">
        <CardImg src={image} alt="pokeman image" />
        <CardImgOverlay className="d-flex flex-column">
          <CardTitle className="mx-auto text-white text-uppercase">{pokemanData.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    )
  }
}