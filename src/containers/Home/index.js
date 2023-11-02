import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StudentList } from '../../components/StudentList'

/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    <>
       <Header/>
         <StudentList/>
       <Footer/>
    </>
   )

 }