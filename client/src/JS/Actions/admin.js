import axios from "axios" ;
import { CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from "../ActionTypes/admin";



// login
export const login = (admin , history) => async (dispatch) =>{
    dispatch ({type: LOAD_ADMIN})
    try {
        let result = await axios.post( "/api/admin/login", admin)
        dispatch({type: LOGIN_ADMIN, payload: result.data})
        history.push("/admin")
    } catch (error) {
        dispatch({type: FAIL_ADMIN, payload: error.response.data.errors})
    }
}


//current admin
export const currentAdmin = () => async (dispatch) =>{
    dispatch({type: LOAD_ADMIN})
    try {
        const config = {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        }
        let result = await axios.get("/api/admin/current", config);
        dispatch({type: CURRENT_ADMIN , payload : result.data})
        console.log(result)
    } catch (error) {
        dispatch({type: FAIL_ADMIN, payload: error.response.data.errors})
    }
}

//log out admin 
export const logOutAdmin = () =>{
    return {
        type : LOGOUT_ADMIN
    }
    
}