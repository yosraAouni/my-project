import axios from "axios";
import { FAIL_ADVANCE, GET_ADVANCE, LOAD_ADVANCE } from "../ActionTypes/advance";


//get all advance
export const getAllAdvance = () => async (dispatch) =>{
    dispatch ({type: LOAD_ADVANCE})
    try {
        let result = await axios.get("/api/advance/getalladvance")
        dispatch({type: GET_ADVANCE , payload: result.data.listAdvance })
    } catch (error) {
        dispatch({type: FAIL_ADVANCE, payload: error.response })
    }
}

//post advance
export const addAdvance = (newAdvance) => async (dispatch)=>{
    try {
        await axios.post("/api/advance/addadvance", newAdvance)
        dispatch(getAllAdvance())
         //alert("Your message has been received")
    } catch (error) {
        dispatch({type: FAIL_ADVANCE , payload: error.response})
}
}

//delete advance
export const deleteAdvance = (id) => async (dispatch) =>{
    try {
        await axios.delete(`/api/advance/deleteadvance/${id}`)
        dispatch(getAllAdvance())
    } catch (error) {
        dispatch({type: FAIL_ADVANCE, payload: error.response})
    }
}