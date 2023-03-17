import React from "react";

export default function Education({education}){
    return(
        <>
       <h1>Education</h1>
       <ul>
       <li>Year:{education[0].year} , Degree: {education[0].degree} , institution: {education[0].institution}</li>
       </ul>

        </>
    )
}