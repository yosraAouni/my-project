// importation type

import { CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from "../ActionTypes/admin"




// state initiale
const initialstate ={
    admin:{},
    loadAdmin: false,
    errors: [],
    isAuth : false
}

//pureFonction
const adminReducer = (state= initialstate, {type,payload}) => {
    switch (type) {
        // LOAD_ADMIN 
        case LOAD_ADMIN :
            return {...state, loadAdmin :true};
        //LOGIN_ADMIN
        case LOGIN_ADMIN :
            localStorage.setItem ("token", payload.token)
            return {...state, loadAdmin: false, admin : payload.admin, isAuth: true};
        //CURRENT_ADMIN
        case CURRENT_ADMIN:
            return{...state, loadAdmin: false, admin : payload, isAuth: true, errors : []} 
        //FAIL_ADMIN
        case FAIL_ADMIN :
            return {...state, loadAdmin: false, errors: payload }
        //log out 
        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return { admin : {} , loadAdmin: false, errors : [], isAuth: false }
        default:
            return state
    }
}

//export
export default adminReducer;