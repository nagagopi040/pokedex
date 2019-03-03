import React, { Component, Fragment } from "react";

export class Search extends Component{
  render(){
    return(
      <Fragment>
        <input placeholder="Search for Pokémon" type="text" name="search" className="w-100 border-top-0 border-left-0 border-right-0 border-bottom-1 border-primary" />
      </Fragment>
    )
  }
}