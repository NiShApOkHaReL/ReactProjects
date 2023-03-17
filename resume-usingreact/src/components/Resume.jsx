import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Header from "./Header";

export default function Resume({resume}){
    
      return(
        <>
        <Header ></Header>
        <Education education={resume.education}></Education>
        <Experience experience={resume.experience}></Experience>
        <Skills skills={resume.skills}></Skills>
        </>
      )
} 