import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLeave } from '../../JS/Actions/leave';
import LeaveCard from '../LeaveCard/LeaveCard';
import { Spinner } from 'react-bootstrap';
import "./LeaveList.css";



const LeaveList = () => {
    const listLeave = useSelector (state=> state.leaveReducer.listLeave)
    const load = useSelector((state) => state.leaveReducer.loadLeave)
    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(getAllLeave())
        }, [dispatch])
    return (
        load ? <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>
        :
        <div>
            <div className='lv'>
                { listLeave.map((el) => 
                        <LeaveCard leave={el} key= {el._id} />
                    )
                }
            </div>
            
        </div>
    )
}

export default LeaveList