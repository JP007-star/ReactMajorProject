import axios from "../helper/axios"
import { studentConstants } from "./constants";

export  const getStudents = () => {
    return async dispatch => {
      try {
        dispatch({ type: studentConstants.GET_ALL_STUDENTS_REQUEST });
        const res = await axios.get(`/readAllStudents`);
        if (res.status === 200) {
          
          const  students  = res.data;
          dispatch({
            type: studentConstants.GET_ALL_STUDENTS_SUCCESS,
            payload: { students },
          });
          console.log(students);
        } else {
          dispatch({ type: studentConstants.GET_ALL_STUDENTS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };


export const deleteStudent=(payload) =>{
    const config={
        headers:{
            'Content-Type' :'application/json'
        }
    }

    return async (dispatch) =>{
        try {

            dispatch({type:studentConstants.DELETE_STUDENT_BY_ID_REQUEST})
            const res=await axios.delete(`deleteStudent?id=${payload.studentId}`,config)
            if(res.status=== 200){
                dispatch({type:studentConstants.DELETE_STUDENT_BY_ID_SUCCESS})
                dispatch(getStudents())
            }
            else{
                const {error} =res.data
                dispatch({type:studentConstants.DELETE_STUDENT_BY_ID_FAILURE,
                payload:{
                    error
                }})
            }
        }
        catch(error){
            console.log(error);
        }
    }
}


export const addStudent=(form) =>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    return async (dispatch) =>{
        try{
            dispatch({type:studentConstants.ADD_STUDENT_REQUEST})
            const res=await axios.post(`createStudent`,form,config);
            if(res.status ===200) {
                dispatch({type:studentConstants.ADD_STUDENT_SUCCESS})
            }
            else {
                dispatch({type:studentConstants.ADD_STUDENT_FAILURE})
            }
        }
        catch(error){
            console.log(error);
        }
    }
}