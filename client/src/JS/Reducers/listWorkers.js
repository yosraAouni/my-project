//importation type

import { FAIL_LISTWORKERS, GET_LISTWORKERS, GET_WORKERS, LOAD_LISTWORKERS } from "../ActionTypes/listWorkers";



//state initiale
const initialstate ={
    listWorkers: [],
    errors: null,
    load: false,
    worker:{}
}


//pure fonction
const workersListReducer = (state= initialstate, {type,payload}) =>{
    switch (type) {
        //load list workers
        case LOAD_LISTWORKERS :
            return {...state, load: true}
        // get all list workers
        case GET_LISTWORKERS :
            return{...state, load: false, listWorkers: payload}
        //get one worker
        case GET_WORKERS :
            return {...state, load: false, worker: payload.workerToGet}
        //fail list worker
        case FAIL_LISTWORKERS: 
            return {...state, load: false, errors: payload}
        default:
            return state;
    }
}


export default workersListReducer;