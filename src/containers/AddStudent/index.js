import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Student } from "../../components/Student";

/**
 * @author
 * @function AddStudent
 **/

export const AddStudent = (props) => {
  return (
    <>
      <Header />
       <Student/>
      <Footer />
    </>
  );
};
