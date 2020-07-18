import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

// React component
// This whole thing is rendered by index.js as a single App component
// It has child components (Menu)
// State: 
// - Here Menu renders View using current state. A view is essentially 
//   a function call that renders, or returns render ready html. 
//   Typically a view is something like:
//     map((foo) => return {<div>foo.name</div>};)
// - Populating state down to a child is roundabout; Eg: Call Menu,
//   Menu's constructor calls back into the super which populates 
//   props with specified state. 
// - State can be passed back from child to parent. Usually aggregated 
//   into a common ancestor. 
// Events: 
//  - Take arrow functions as a parameter
// Lifecycle: 
//  - Mount, Updating (view update), Unmounting
//  - Different methods invoked by react during each stage
//  - Mount: 
//    * constructor, getDerivedStateFromProps, render, componentDidMount
//   - Unpdating:
//    * 
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
