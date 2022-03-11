//importation type

import { FAIL_ADVANCE, GET_ADVANCE, LOAD_ADVANCE } from "../ActionTypes/advance";



//initial state 
const initialstate = {
    listAdvance: [],
    loadAdvance: false,
    errors : []
}


//pure fonction
const advanceReducer = (state= initialstate, {type,payload}) =>{
    switch (type) {
        //LOAD
        case LOAD_ADVANCE :
            return {...state, loadAdvance: true}
        //GET
        case GET_ADVANCE :
            return{...state, loadAdvance: false, listAdvance: payload}
        //FAIL 
        case FAIL_ADVANCE : 
        return{...state, loadAdvance:false, errors: payload}
        default:
            return state;
    }
}
export default advanceReducer; 