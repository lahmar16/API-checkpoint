import React from 'react';
import logo from '../img/11.png';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Link to={`/Profile/${user.id}` }>
          <Card.Img variant="top" src={logo} />
        </Link>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;