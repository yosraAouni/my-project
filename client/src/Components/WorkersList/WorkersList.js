import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlltWorkers } from "../../JS/Actions/listWorkers";
import WorkersCard from "../WorkersCard/WorkersCard";
import {Spinner} from "react-bootstrap"
import "./WorkersList.css"


const WorkersList = () => {
    const listWorkers = useSelector(state => state.workersListReducer.listWorkers)
    const load = useSelector((state) => state.workersListReducer.load)
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(getAlltWorkers())
    }, [dispatch])
    return (
        load ? <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner> : 
        <div className="color">
            <div className="wokerList">
            {listWorkers.map((el)=> <WorkersCard worker={el} key ={el._id} />)}
        </div>
        </div> 
        
    )
}

export default WorkersList
