import React from "react";
import "./LeaveCard.css"
import { deleteLeave } from "../../JS/Actions/leave";
import {Card,Button} from "react-bootstrap"
import { useDispatch } from "react-redux";

const LeaveCard = ({leave}) => {
    const dispatch = useDispatch()
    return (
    <div>
        <Card className="text-center">
            <div className="c">
            <Card.Header>LEAVE</Card.Header>
            </div>
        
        <Card.Body>
            <Card.Title> Name: {leave && leave.fullName} </Card.Title>
            <Card.Title>Poste: {leave && leave.poste}</Card.Title>
            <Card.Title> Start: {leave && leave.firstDay}</Card.Title>
            <Card.Title>End: {leave && leave.lastDay}</Card.Title>

            <Card.Text>
             Nbr Day : {leave && leave.nbrDay}
            </Card.Text>
            <Button variant="primary">Confirmed</Button>
            <Button variant="primary">No Confirmed</Button>
            <Button variant="primary" onClick={()=> dispatch(deleteLeave(leave._id))}>Delete</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Type: {leave && leave.leaveType}</Card.Footer>
        </Card>
    </div>
    )
}

export default LeaveCard