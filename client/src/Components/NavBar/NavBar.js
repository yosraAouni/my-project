import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutAdmin } from '../../JS/Actions/admin';
import { Link } from 'react-router-dom';
import './navBar.css'
import { logOut } from '../../JS/Actions/workers';
import { Button, Form  } from 'react-bootstrap';

const NavBar = () => {
    const isWorkerAuth = useSelector ((state)=> state.workersReducer.isWorkerAuth);
    const isAuth = useSelector((state)=> state.adminReducer.isAuth)
    const dispatch = useDispatch()
    return (
        <header className='header-nav'>
        <nav>
            <div class="logo"><a href="/">WORKERS PLATFORM</a></div>
            <div class="menu" >
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/connexion">Connexion</a></li>
                    <li><a href="/information">INFO</a></li>
                    <div className='butt'>
                    {(isAuth) || (isWorkerAuth) ? (<Form inline>
                    <Link to="/" onClick={() => dispatch(logOut ()) && dispatch(logOutAdmin) }><Button variant="success">Logout</Button>{' '}</Link>
                    </Form>) : null}
                    </div>
                    
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default NavBar