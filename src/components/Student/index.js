import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addStudent } from '../../action'
import { useNavigate } from 'react-router-dom'

/**
* @author
* @function Student
**/

export const Student = (props) => {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [fee,setFee]=useState("")

    const dispatch=useDispatch()

    const navigate=useNavigate()
    const handleSubmit=()=>{
         const form=new FormData()
         form.append("name",name);
         form.append("age",age);
         form.append("fee",fee);

         dispatch(addStudent(form))
         navigate("/")
    }
  return(
       <div className="card m-5" >
         <div className="card-body">
           <h5 className="card-title">Add Student</h5>
           <Row >
           <form className='p-2'>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                  type="text" 
                  className="form-control"
                  id="name" 
                  placeholder="Student Name .."
                  name='name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input 
                  type="number" 
                  className="form-control" 
                  id="age" 
                  placeholder="Age"
                  name='age'
                  value={age}
                  onChange={(e)=>setAge(e.target.value)}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="fee">Fee</label>
                  <input 
                  type="number"
                  className="form-control" 
                  id="fee" 
                  placeholder="Fee" 
                  name='fee'
                  value={fee}
                  onChange={(e)=>setFee(e.target.value)}
                  />
                </div>
                <div className="btn-group d-flex p-3" role="group" aria-label="Basic example">
                <button 
                className="btn btn-primary " 
                type="button"

                onClick={handleSubmit}
                >Button</button>

                </div>
              </form>
           </Row>
             
              
         </div>
       </div>
       
   )

 }