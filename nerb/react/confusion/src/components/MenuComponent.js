import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

  // Constructor usually contains a js object with component state
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }
    console.log('Menu component constructor')
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  componentDidMount() {
    console.log('Menu component componentDidMount')
  }

  // Components always have a view
  // render always returns the view for the component
  render() {
    // * React uses dish.id "key" to track list item updates. 
    // * Media class just like bootstraps Media. 
    // TODO: Card vs Media. 
    // TODO: Why width=100%?
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-6 mt-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}
            />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log('Menu component render')
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <DishDetail selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;