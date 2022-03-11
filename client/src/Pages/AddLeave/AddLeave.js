import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {addLeave} from '../../JS/Actions/leave'
import "./AddLeave.css"

const AddLeave = () => {

    const [newLeave, setNewLeave] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        setNewLeave({...newLeave,[e.target.name] : e.target.value})
    }

    return (
        <div className='addL'>
            <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <div className='req'>
                <h3>Request </h3>
                </div>
                
                
                <div className="card">
                <h5 className="text-center mb-4">submit your request</h5>
                <form className="form-card" onsubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">Full Name<span className="text-danger"> *</span></label> 
                        <input type="text" id="fname" name="fullName" onChange={handleChange} placeholder="Enter your  name" onblur="validate(1)" /> </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3">Poste<span className="text-danger"> *</span></label> 
                    <input type="text" id="poste" name="poste" onChange={handleChange} placeholder="Enter your poste" onblur="validate(2)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3">Start Day<span className="text-danger"> *</span></label> 
                    <input type="text" id="startday" name="firstDay" onChange={handleChange} placeholder onblur="validate(3)" /> </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3"> End Day<span className="text-danger"> *</span></label> 
                    <input type="text" id="mob" name="lastDay" onChange={handleChange} placeholder onblur="validate(4)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3"> Number Day<span className="text-danger"> *</span></label> 
                    <input type="text" id="job" name="nbrDay" onChange={handleChange} placeholder onblur="validate(5)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-12 flex-column d-flex">
                         <label className="form-control-label px-3">Off Day Type<span className="text-danger"> *</span></label> 
                        <input type="text" id="ans" name="leaveType" onChange={handleChange} placeholder onblur="validate(6)" /> </div>
                    </div>
                    <div className="row justify-content-end">
                    <div className="form-group col-sm-6">
                        <Link to="/Profile"><button type="submit" onClick={() => dispatch(addLeave(newLeave))} className="btn-block btn-primary">Send Request </button></Link>  </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AddLeave