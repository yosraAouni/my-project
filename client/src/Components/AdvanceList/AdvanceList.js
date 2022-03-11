import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdvance } from '../../JS/Actions/advance';
import AdvanceCard from '../AdvanceCard/AdvanceCard';
import { Spinner } from 'react-bootstrap';
import './AdvanceList.css'

const AdvanceList = () => {
    const listAdvance = useSelector(state => state.advanceReducer.listAdvance)
    const load= useSelector((state)=> state.advanceReducer.loadAdvance)
    const dispatch = useDispatch()
        useEffect(()=> {
            dispatch(getAllAdvance())
        }, [dispatch])
    return (
        load ? <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>
        :
        <div>
            <div className="adv">
                {listAdvance.map(advance=>
                    <AdvanceCard advance={advance} key={advance._id} /> ) }
            </div>
        </div>
    )
}

export default AdvanceList