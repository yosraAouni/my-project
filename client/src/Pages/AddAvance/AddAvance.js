import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addAdvance } from '../../JS/Actions/advance'
import "./AddAvance.css"

export const AddAvance = () => {
    const [newAdvance, setNewAdvance] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        setNewAdvance({...newAdvance,[e.target.name] : e.target.value})
    }
    return (
        <div className='addAv'>
            <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <div className='reqL'>
                <h3>Request</h3>
                </div>
                
                
                <div className="card">
                <h5 className="text-center mb-4">submit your request</h5>
                <form className="form-card" onsubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3">Full Name<span className="text-danger"> *</span></label>
                    <input type="text" id="fname" name="fullName"  onChange={handleChange} placeholder="Enter your name" onblur="validate(1)" /> </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3">Poste<span className="text-danger"> *</span></label> 
                    <input type="text" id="lname" name="poste"  onChange={handleChange} placeholder="Enter your last poste" onblur="validate(2)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3">Advance<span className="text-danger"> *</span></label> 
                    <input type="text" id="poste" name="advance"  onChange={handleChange}  placeholder="Enter your advance" onblur="validate(3)" /> </div>
                    
                    </div>
                    
                    
                    <div className="row justify-content-end">
                    <div className="form-group col-sm-6"> 
                    <Link to="/Profile"><button type="submit" onClick={() => dispatch(addAdvance(newAdvance))} className="btn-block btn-primary">Send Request</button> </Link> </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
