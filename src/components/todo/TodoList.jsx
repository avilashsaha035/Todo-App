import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = () => {
    return (  
        <Card>
            <Card.Body>
                <Card.Title className="text-center todo-title">
                    <h1> My ToDos </h1>
                </Card.Title>

                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
 
export default TodoList;