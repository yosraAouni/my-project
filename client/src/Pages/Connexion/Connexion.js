
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Notification from '../../Components/Notification/Notification'
import { login } from '../../JS/Actions/admin'
import { register, signin } from '../../JS/Actions/workers'
import './Connexion.css'

const Connexion = ({history}) => {
    const [newWorker, setNewWorker]= useState({})
    const errors= useSelector((state)=> state.workersReducer.errors)
    const [admin, setAdmin]= useState({})
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        setNewWorker({...newWorker,[e.target.name] : e.target.value})
        setAdmin({...admin, [e.target.name] : e.target.value})
    }
    return (
        <div className='conx'>
            {errors && errors.map((el)=> <Notification error={el} />)}
            <div className="row">
            <div className="col-md-6 mx-auto p-0">
            <div className="card">
                <div className="login-box">
                <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-space">
                    <div className="login">
                        <div className="group"> <label htmlFor="user" className="label">Email</label> 
                        <input id="user" type="emai" className="input" name="email" onChange={handleChange} placeholder="Enter your email" /> </div>
                        <div className="group"> <label htmlFor="pass" className="label">Password</label> 
                        <input id="pass" type="password" className="input" name="password" data-type="password" onChange={handleChange} placeholder="Enter your password" /> </div>
                        <div className="group"> <input id="check" type="checkbox" className="check" defaultChecked />
                        <label htmlFor="check"><span className="icon" /> Keep me Signed in</label> </div>
                        <div className="group"> <button  type="submit" className="button" defaultValue="Sign In" 
                        onClick={()=>dispatch(signin(newWorker,history)) && dispatch (login(admin, history))  } > Login </button>  </div>
                        <div className="hr" />
                        <div className="foot"> <a href="/">Forgot Password?</a> </div>
                    </div>
                    <div className="sign-up-form">
                        <div className="group"> <label htmlFor="user" className="label">First Name</label> 
                        <input id="user" type="text" className="input" name='firstName' onChange={handleChange} placeholder="Create your Username"  /> </div>
                        <div className="group"> <label htmlFor="user" className="label">Last Name</label> 
                        <input id="user" type="text" className="input" name='lastName'  onChange={handleChange} placeholder="Create your Username"  /> </div>
                        <div className="group"> <label htmlFor="pass" className="label">Email Address</label> 
                        <input id="pass" type="text" className="input" name="email" onChange={handleChange} placeholder="Enter your email address" /> </div>
                        <div className="group"> <label htmlFor="pass" className="label">Password</label> 
                        <input id="pass" type="password" className="input" name='password' data-type="password" onChange={handleChange} placeholder="Create your password" /> </div>
                        
                        <div className="group"> <label htmlFor="pass" className="label">Phone</label>
                        <input id="pass" type="text" className="input" name="phone"  onChange={handleChange} placeholder="Repeat your phone" /> </div>
                        <div className="group"> <button type="submit" className="button" defaultValue="Sign Up" onClick={()=> dispatch (register(newWorker,history))} > Register </button>  </div>
                        <div className="hr" />
                        <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
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

export default Connexion