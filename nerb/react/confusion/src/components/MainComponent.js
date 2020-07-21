import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';


// Main component is responsible for both Menu and DishDetails
// Main is the Container and the others are Presentation components
class Main extends Component {

  constructor(props) {
    console.log('Main component constructor')
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    console.log('Main component render')
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail selectedDish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }
}

export default Main;