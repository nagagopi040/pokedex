import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

export class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen : false,
      selectedValue: 10
    }
  }
  
  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  applyFilter = (value) => {
    // if(value!== this.selectedValue){
    //   this.setState({
    //     selectedValue: value
    //   })
    // }
  }

  render() {
    return (
      <div>
        <div className="d-inline">Items per page: </div>
        <Dropdown className="d-inline" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color="primary" outline className="border-1">{this.state.selectedValue}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.applyFilter(10)} active={this.state.selectedValue === 10}>10</DropdownItem>
            <DropdownItem onClick={this.applyFilter(20)} active={this.state.selectedValue === 20}>20</DropdownItem>
            <DropdownItem onClick={this.applyFilter(50)} active={this.state.selectedValue === 50}>50</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}