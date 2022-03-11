//importation type

import { FAIL_LEAVE, GET_LEAVE, LOAD_LEAVE } from "../ActionTypes/leave";



//initial state
const initialstate = {
    listLeave: [],
    loadLeave: false,
    errors:[]
}


//pure fonction 
const leaveReducer = (state= initialstate, {type,payload}) =>{
    switch (type) {
        //load
        case LOAD_LEAVE:
            return{...state,loadLeave: true }
        //get
        case GET_LEAVE :
            return {...state, loadLeave: false, listLeave: payload}
        //fail
        case FAIL_LEAVE :
            return{...state, loadLeave: false, errors:payload}

        default:
            return state;
    }
}


export default leaveReducer; 