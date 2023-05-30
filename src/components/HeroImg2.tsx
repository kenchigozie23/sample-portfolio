import "./HeroImg2Styles.css"

// import  { Component } from 'react'

// import React from 'react'


function HeroImg2(props) {
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{props.head}</h1>
                <p>{props.text}</p>
            </div>
        </div>
      )
}

export default HeroImg2

       
    


