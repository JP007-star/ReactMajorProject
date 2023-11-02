import { studentConstants } from "../action/constants"

const student={
    error :null,
    loading : false,
    students: []
}

const fn=(state=student,action)=>{
    switch(action.type){
        case studentConstants.GET_ALL_STUDENTS_REQUEST:
            state={
                ...state,
                loading:true
            }
        break;
        case studentConstants.GET_ALL_STUDENTS_SUCCESS :
            state={
                ...state,
                students:action.payload.students,
                loading:false
            }
        break
        case studentConstants.GET_ALL_STUDENTS_FAILURE :
            state={
                ...state,
                students:action.payload.error,
                loading:false
            }
        break
        case studentConstants.DELETE_STUDENT_BY_ID_REQUEST:
                state={
                    ...state,
                    loading:true
                }
        break;
        case studentConstants.DELETE_STUDENT_BY_ID_SUCCESS :
                state={
                    ...state,
                    students:action.payload.students,
                    loading:false
                }
        break
        case studentConstants.DELETE_STUDENT_BY_ID_FAILURE :
                state={
                    ...state,
                    students:action.payload.error,
                    loading:false
                }
        break
        case studentConstants.ADD_STUDENT_REQUEST :
            state={
                ...state,
                loading :true
            }
        break
        case studentConstants.ADD_STUDENT_SUCCESS:
            state={
                ...state,
                students:action.payload.students,
                loading:false
            }
        break
        case studentConstants.ADD_STUDENT_FAILURE:
            state={
                ...state,
                error:action.payload.error,
                loading:false
            }
        break
        default :
         break
    }
    return state;
}


export default fn;