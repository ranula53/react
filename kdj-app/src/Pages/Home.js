import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import womenImage from '../Pages/Images/woman.jpg'; // Ensure this path is correct
import './Home.css'; // Import the CSS file

export default function Home() {
  return (
    <div className='card-container'>
      <div className='card'>
      <Card >
      <Card.Img variant="top" src={womenImage} alt="woman" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='card'>
      <Card >
      <Card.Img variant="top" src={womenImage} alt="woman" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='card'>
      <Card >
      <Card.Img variant="top" src={womenImage} alt="woman" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

    </div>
  );
}