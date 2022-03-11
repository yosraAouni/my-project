import React from 'react';
import {Card,Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteAdvance } from '../../JS/Actions/advance';
import "./AdvanceCard.css"




const AdvanceCard = ({advance}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card className="text-center">
                <div className='a'> 
                <Card.Header>ADVANCE</Card.Header>
                </div>
            
            <Card.Body>
                <Card.Title> Name : {advance && advance.fullName} </Card.Title>
                <Card.Title> Advance : {advance && advance.advance} </Card.Title>
                <Button variant="primary">Confirmed</Button>
                <Button variant="primary"> No Confirmed</Button>
                <Button variant="primary" onClick={()=> dispatch( deleteAdvance(advance._id)) }> Delete </Button>
            </Card.Body>
            <div >
            <Card.Footer className="text-muted">Poste: {advance && advance.poste} </Card.Footer>
            </div>
            
            </Card>

        </div>
    )
}

export default AdvanceCard