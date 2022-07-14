import React from 'react'

export default function SurveyCard({userData}){

    return(
        <div className="surveyCardContent">
        <h2>Survey card</h2>
        <div className="surveyUserData">
        <p><b>Name:</b> {userData.name}</p>
        <p><b>Email:</b>{userData.email}</p>
        <p><b>Age:</b>{userData.age}</p>
        <p><b>Genre:</b>{userData.genre}</p>
        <p><b>Recommend:</b> {userData.recommend}</p>
        </div>
        <p><b>Features</b></p>
        <ul>{
        userData.features.map((element) => <li key={element}>{element}</li>)    
            }</ul>
        <p><b>Comments:</b> {userData.comments}</p>
        </div>
    )
}