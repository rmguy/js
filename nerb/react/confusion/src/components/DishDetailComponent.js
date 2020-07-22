import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({ comments }) {
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
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-6 mt-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const DishDetail = (props) => {
  console.log("DishDetail render")
  if (props.selectedDish == null) {
    return (
      <div></div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.selectedDish} />
          <RenderComments comments={props.selectedDish.comments} />
        </div>
      </div>
    );
  }
}

export default DishDetail;