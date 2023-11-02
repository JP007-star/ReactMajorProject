import React, { useEffect } from 'react'
import { deleteStudent, getStudents } from '../../action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

/**
* @author
* @function StudentList
**/

export const StudentList = (props) => {

const studentObj = useSelector((state) => state.student);
  const student=studentObj.students;
  console.log(JSON.stringify(student))
   const dispatch=useDispatch()
const navigate=useNavigate()
    useEffect(() => {
    dispatch(getStudents());
        console.log(student);
    }, [])

    const handleDelete=(id)=>{
        const payload={
            studentId: id,
        }

        dispatch(deleteStudent(payload))
        navigate('/')
    }
    
  return(
   <>
 
     <div className="table-responsive">
     <table className="table table-sm table-striped">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Name</th>
           <th scope="col">Age</th>
           <th scope="col">Fee</th>
           <th scope="col">Action</th>

         </tr>
       </thead>
       <tbody>
         {student.students!=null && student.students.length > 0  ? student.students.map(student =>(
               <tr key={student._id}>
               <th scope="row">{student._id}</th>
               <td>{student.name}</td>
               <td>{student.age}</td>
               <td>{student.fee}</td>
               <td><button 
               onClick={()=>handleDelete(student._id)}
               className="btn btn-outline-danger" type="button"
               >X</button> </td>
             </tr>
         )) : <tr>
                  
         <td colSpan={5} className='text-center'>No Data</td>
        
       </tr>}
       
        
       </tbody>
     </table>
     </div>
     
   </>
   )

 }