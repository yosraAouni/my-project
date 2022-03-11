import axios from "axios";
import { FAIL_LISTWORKERS, GET_LISTWORKERS, GET_WORKERS, LOAD_LISTWORKERS } from "../ActionTypes/listWorkers";


//get all 
export const getAlltWorkers = () => async (dispatch) => {
    dispatch({type: LOAD_LISTWORKERS })
    try {
        let result = await axios.get("/api/workerlist/getallworkers");
        dispatch({type: GET_LISTWORKERS, payload: result.data.listWorkers})
    } catch (error) {
        dispatch ({type: FAIL_LISTWORKERS , payload: error.response})
    }
}

//get one
export const getOneWorkers = (id) => async (dispatch) => {
    try {
        const result = await axios.get(`/api/workerlist/getoneworker/${id}`)
        dispatch({type: GET_WORKERS , payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_LISTWORKERS, payload: error.response})
        
    }
}

//delete
export const deleteWorkers = (id) => async (dispatch) =>{
    try {
        await axios.delete(`/api/workerlist/deleteworker/${id}`)
        dispatch(getAlltWorkers())
    } catch (error) {
        dispatch({type: FAIL_LISTWORKERS, payload: error.response})
        
    }
}

//edit workers
export const editWorkers = (id, newWorker, history) => async (dispatch) =>{
    try {
        await axios.put(`/api/workerlist/editworker/${id}`, newWorker)
        dispatch(getOneWorkers())
        history.push("/Profile")
    } catch (error) {
        dispatch({type: FAIL_LISTWORKERS, payload: error.response})
    }
}
