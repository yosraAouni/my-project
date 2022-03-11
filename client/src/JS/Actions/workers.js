import axios from "axios";
import { CLEAR_ERRORS, CURRENT_WORKER, FAIL_WORKER, LOAD_WORKER, LOGIN_WORKER, LOGOUT_WORKER, REGISTER_WORKER } from "../ActionTypes/workers";



//register 
export const register = (newWorkers, history) => async (dispatch)=>{
    dispatch ({type: LOAD_WORKER});
    try {
        let result = await axios.post("/api/workers/register", newWorkers)
        dispatch ({type: REGISTER_WORKER, payload: result.data})
        history.push ("/Profile")
    } catch (error) {
        dispatch({type: FAIL_WORKER, payload:error.response.data.errors })
    }
}

//login 
export const signin = (worker , history) => async (dispatch) =>{
    dispatch({type: LOAD_WORKER});
    try {
        let result = await axios.post("/api/workers/login", worker)
        dispatch ({type: LOGIN_WORKER, payload: result.data})
        history.push("/Profile")
    } catch (error) {
        dispatch({type: FAIL_WORKER, payload: error.response.data.errors})
        
    }
}

//current worker
export const currentWorker = () => async (dispatch) =>{
    dispatch ({type: LOAD_WORKER});
    try {
        const config = {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        }
        let result = await axios.get("/api/workers/current", config)
        dispatch ({type: CURRENT_WORKER , payload : result.data})
        console.log(result)
    } catch (error) {
        dispatch({type : FAIL_WORKER, payload : error.response.data.errors})
    }
}


//clear errors
export const clearErrors = ()=>{
    return{
        type: CLEAR_ERRORS
    }
    
}

//log out worker
export const logOut = () =>{
    return {
        type : LOGOUT_WORKER 
    }
}


