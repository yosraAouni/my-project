import React from 'react'
import {  useSelector } from 'react-redux'
//import { getOneWorkers } from '../../../../Actions/listWorkers';
import { Link } from 'react-router-dom';
import {Button} from  'react-bootstrap'
import './profile.css'



const  Profile = ({newLeave,history}) => {
    const worker = useSelector((state)=> state.workersReducer.worker);

    //const dispatch = useDispatch()
    const handleEdit =()=>{
        //dispatch(getOneWorkers(worker._id))
    }
    
    return (
        <div className='Profil'>
            <div className="page-content page-container" id="page-content">
            <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                        <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="pic" /> </div>
                        <h6 className="f-w-600">{(worker && worker.firstName )}</h6>
                        <h6 className="f-w-600">{(worker && worker.lastName) }</h6>

                        <p>Worker</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                        <div className="row">
                            <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Email</p>
                            <h6 className="text-muted f-w-400">{(worker && worker.email)}</h6>
                            </div>
                            <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Phone</p>
                            <h6 className="text-muted f-w-400">{(worker && worker.phone) }</h6>
                            </div>
                        </div>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                        <div className="row">
                            <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Update Profile : </p>
                            
                            </div>
                            <div className="col-sm-6">
                            <Link to= {`/edit/${worker && worker._id}`}><Button variant="primary" >Modified</Button></Link>
                            </div>
                        </div>
                        
                        </div>
                        <div className='Button-adv-Lv'>
                        
                        <Link to= "/addAdvance"><Button variant="primary" name='addAdvance'  >Advance</Button></Link>
                        <Link to="/addLeave"><Button variant="primary" name='addLeave'>Day Off</Button></Link>

                        
                        
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Profile