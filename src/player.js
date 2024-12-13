import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, club, price, position, overall, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {club}<br />
                    <strong>Price:</strong> {price}<br />
                    <strong>Position:</strong> {position}<br />
                    <strong>overall:</strong> {overall}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Default Name",
    club: "Default Team",
    price: "Default Nationality",
    position: 0,
    overall: 0,
    imageUrl: "https://via.placeholder.com/150"
};

export default Player;
