import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
    console.log("DishDetail constructor")
  }

  renderComments(comments) {
    if (comments != null) {
      console.log('printing comments' + comments)
      const displayComments = comments.map((c) => {
        return (
          <li key={c.id}>
            <blockquote className="blockquote">
              <p>{c.comment}</p>
              <footer className="blockquote-footer">
                {c.author}, {new Intl.DateTimeFormat(
                  'en-US', {
                  month: 'short',
                  year: 'numeric',
                  day: '2-digit'
                }).format(new Date(Date.parse(c.date)))
                }
              </footer>
            </blockquote>
          </li>
        );
      });

      return (
        <div className="col-12 col-md-6 mt-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {displayComments}
          </ul>
        </div>
      );
    } else {
      console.log('null comments')
      return (
        <div></div>
      );
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            {this.renderComments(this.props.selectedDish.comments)}
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  render() {
    console.log("DishDetail render")
    return this.renderDish(this.props.selectedDish);
  }
}

export default DishDetail;