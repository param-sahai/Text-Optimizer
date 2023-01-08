// import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {


  let myStyle = {
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor: props.mode === 'dark'? 'black' : 'white'
  }



  return (
    <div className="container my-5" style={myStyle} >
        <h2>About us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>What is it?</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
              Text-Optimizer is a fast and free to use application. <br />Built on <Link to="https://reactjs.org/">ReactJS</Link> framework that lets you manipulate your text easily at the click of a button. <br />It provides you the summary of the text by counting the number of words, number of characters with and without spaces, along with reading minutes of your content.
              Not only this, it also allows you to easily manipulate the texts and preview it.
              </div>
            </div>
         </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Who can use it?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Text-Optimizer has been created for anyone who writes texts that are limited to a minimum and/or maximum numner of words. Be it Teachers, Students, Authors, Journalists, etc. It is also useful for webpage editors who are wanting to optimize their content. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Easy to use</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This application is completely beginner friendly. <br /> It does not have any complex commands or options, which makes it easy to use.
        <br />Simply copy and paste the text or type it in the input box, select from among the many optimization features such as Uppercase conversion, Lowercase conversion, removing unwanted spaces and the most requested of all, extracting email ids.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
