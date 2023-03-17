import React from "react";

export default function Experience({experience}){
    return(
        <>
        <h1>Experience</h1>
        <ul>
        <li>Role:{experience[0].role} , Year: {experience[0].year} , Company: {experience[0].company}</li>
    <li>Role:{experience[1].role} , Year: {experience[1].year} , Company: {experience[1].company}</li>  
        </ul>
        </>
    )
}