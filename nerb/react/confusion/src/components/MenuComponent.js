import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// params can be "props" or the the specific properties in the props js object
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name}
      />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// This could easily be function Menu(props)
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-6 mt-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  console.log('Menu component render')
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;