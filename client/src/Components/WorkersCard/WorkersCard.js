import React from "react";
import {Card,Button} from "react-bootstrap";
import "./WorkersCard.css"
import { useDispatch } from "react-redux";
import { deleteWorkers } from "../../JS/Actions/listWorkers";


const WorkersCard = ({worker}) => {
    const dispatch = useDispatch()
    return (
        <div className="worker-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png" />
                <Card.Body>
                    <Card.Title> {worker && worker.firstName} </Card.Title>
                    <Card.Title> {worker && worker.lastName} </Card.Title>
                    <Card.Title> {worker && worker.email} </Card.Title>
                    <Card.Title> {worker &&  worker.phone} </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => dispatch (deleteWorkers(worker._id))}>Delete</Button>
                </Card.Body>
                </Card>
            
        </div>
    )
}

export default WorkersCard