
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { currentWorker } from './JS/Actions/workers';
import {currentAdmin} from './JS/Actions/admin';
import './App.css';


import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Errors from './Pages/Errors/Errors';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Connexion from './Pages/Connexion/Connexion';
import Information from './Pages/Information/Information'
import Edit from './Pages/EditProfil/Edit';
import PrivateRoute from './Routes/PrivateRoute';
import Admin from './Pages/InterfaceAdmin/Admin'
import WorkersList from './Components/WorkersList/WorkersList';
import LeaveList from './Components/LeaveList/LeaveList';
import AdvanceList from './Components/AdvanceList/AdvanceList';
import { AddAvance } from './Pages/AddAvance/AddAvance';
import AddLeave from './Pages/AddLeave/AddLeave';


function App() {
  const dispatch = useDispatch()
    useEffect(()=>{
      if(localStorage.getItem("token")){
        dispatch(currentWorker() , currentAdmin())
      }
    }, [dispatch])
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/profile' component={Profile}/>
          <Route path='/connexion' component={Connexion}/>
          <Route path='/information' component={Information}/>
          <Route path='/edit/:id' component={Edit}/>
          <PrivateRoute path='/admin' component={Admin}/>
          <PrivateRoute path='/listworker' component={WorkersList}/>
          <PrivateRoute path='/listleave' component={LeaveList}/>
          <PrivateRoute path='/listadvance' component={AdvanceList}/>
          <PrivateRoute path='/addAdvance' component={AddAvance}/>
          <PrivateRoute path='/addLeave' component={AddLeave}/>
           
          

          <Route path='/*' component={Errors}/>
        </Switch>
        <Footer/>
      
      
    </div>
  );
}

export default App;
