import studentReducer from "./student.reducer";
import {combineReducers} from "redux"
const rootReducer=combineReducers({
    student :studentReducer,
})

export default rootReducer;