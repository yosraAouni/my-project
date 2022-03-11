import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component:Component, ...props}) => {
    const token = localStorage.getItem("token")
    if (token){
        return <Route component={Component} {...props} />
    }
    return <Redirect to="/connexion"/>
}

export default PrivateRoute