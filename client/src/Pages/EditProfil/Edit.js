import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { editWorkers } from '../../JS/Actions/listWorkers';
import { Button } from "react-bootstrap";
import './Edit.css'

const Edit = ({match, history}) => {
    const [newWorkers, setNewWorkers] = useState({firstName:"", lastName:"", email:"",password:"", phone:""});
    
    const dispatch= useDispatch()
    
    //const workerlist = useSelector(
        //(state) => state.workersListReducer.listWorkers
    //);
    //const foundWorker = workerlist.find((el) => el._id === match.params.id);
    // console.log(foundContact);

    
    const handleChange = (e) =>{
        setNewWorkers({...newWorkers,[e.target.name] : e.target.value})
    }
    console.log(match.params.id)
    const handleEdit = () => {
        dispatch(editWorkers(match.params.id, newWorkers,history ));
        
    }

    return (
        <div className='editP'>
            <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h3>Request</h3>
                
                <div className="card">
                <h5 className="text-center mb-4">modify your information</h5>
                <form className="form-card" onsubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label>
                    <input type="text" id="fname" name="firstName"  value={newWorkers.firstName} onChange={handleChange} placeholder="Enter your first name" onblur="validate(1)" />
                    </div>
                    </div>

                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> 
                        <input type="text" id="lname" name="lastName" value={newWorkers.lastName} onChange={handleChange}  placeholder="Enter your last name" onblur="validate(2)" /> 
                        </div>
                        
                    <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label> 
                        <input type="text" id="email" name="email" value={newWorkers.email} onChange={handleChange}  placeholder="Enter your email" onblur="validate(3)" />
                    </div>

                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label px-3">Password<span className="text-danger"> *</span></label> 
                        <input type="text" id="password" name="password" value={newWorkers.password} onChange={handleChange}  placeholder="Enter your email" onblur="validate(3)" />
                    </div>

                    
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">Phone <span className="text-danger"> *</span></label>
                        <input type="number" id="mob" name="phone" value={newWorkers.phone}  onChange={handleChange} placeholder="Enter your phone" onblur="validate(4)" /> 
                        </div>
                    </div>

                    

                    
                    <div className="row justify-content-end">
                    <div className="form-group col-sm-6"> 
                    <Link to="/Profile"> 
                    <Button variant="primary" onClick={handleEdit}>Save</Button>
                    </Link> </div>
                
                    </div>
                </form>
                
                </div>
            </div>
            </div>
        </div>

            
        </div>
    );
    };

export default Edit;