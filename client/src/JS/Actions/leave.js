import axios from "axios";
import { FAIL_LEAVE, GET_LEAVE, LOAD_LEAVE } from "../ActionTypes/leave";

//get all leave
export const getAllLeave = () => async (dispatch) =>{
    dispatch({type: LOAD_LEAVE})
    try {
        let result = await axios.get("/api/leave/getallleave")
        dispatch({type: GET_LEAVE , payload: result.data.listLeave })
    } catch (error) {
        dispatch({type: FAIL_LEAVE , payload: error.response})
    }
}

//post leave
export const addLeave = (newLeave) => async (dispatch) =>{
    try {
        await axios.post("/api/leave/addleave", newLeave)
        dispatch(getAllLeave())
        //alert("Your message has been received")
    } catch (error) {
        dispatch({type: FAIL_LEAVE, payload: error.response})
    }
}

//delete leave
export const deleteLeave = (id) => async (dispatch) =>{
    try {
        await axios.delete(`/api/leave/deleteleave/${id}`) 
        dispatch(getAllLeave())
    } catch (error) {
        dispatch({type: FAIL_LEAVE, payload: error.response})
    }
}


