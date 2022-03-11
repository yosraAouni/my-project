//importation type

import { CLEAR_ERRORS, CURRENT_WORKER, FAIL_WORKER, LOAD_WORKER, LOGIN_WORKER, LOGOUT_WORKER, REGISTER_WORKER } from "../ActionTypes/workers";



//state initiale
const initialstate ={
    worker: null,
    loadWorker: false,
    errors:[],
    isWorkerAuth: false
}


//pure fonction
const workersReducer = (state= initialstate, {type,payload}) =>{
    switch (type) {
        //LOAD_WORKER
        case LOAD_WORKER :
            return {...state, loadWorker: true}
        //REGISTER_WORKER
        case REGISTER_WORKER :
            localStorage.setItem("token", payload.token)
            return {...state, loadWorker: false, worker: payload.worker, isWorkerAuth: true, errors:[]  }
        //LOGIN_WORKER
        case LOGIN_WORKER :
            localStorage.setItem("token", payload.token)
            return {...state, loadWorker: false, worker: payload.worker, isWorkerAuth: true, errors:[] }
        //CURRENT_WORKER
        case CURRENT_WORKER :
            return {...state, loadWorker: false, worker: payload, isWorkerAuth: true, errors:[]}
        //FAIL_WORKER
        case FAIL_WORKER :
            return {...state, loadWorker: false, errors: payload}

        //CLEAR_ERRORS
        case CLEAR_ERRORS:
            return {...state, errors:null}

        //LOGOUT_WORKER
        case LOGOUT_WORKER :
            localStorage.removeItem("token");
            return {worker : {}, loadWorker: false, errors:[], isWorkerAuth: false}
        
        
            default:
            return state;
    }
}

export default workersReducer; 