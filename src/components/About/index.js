import React from 'react'
import "../About/style.css"
import Me from "../Media/me.png"
import Arrow from "../Media/Arrow.png"

function About() {
  return (
    <>
        <div className='about'>
            <div className='about-section'>
            <h2 className='about-title'>About me</h2>
           <p className='about-description'>
                My name is Filipe Leoni and I'm 18 years old, I live in the city<br/> of Petrolina in Pernambuco, 
                I started my journey in early <br/>2022, since then I've been dedicating myself to always be<br/> creating the best possible!<br/>
                Passionate about technology, I like to work as a team and <br/>learn new things, always looking for more knowledge!</p>
                <p className='about-citation'>“Creativity is intelligence having fun.”<br/>
                        -  Albert Einstein</p>
            </div>
        <img className="me" src={Me}/>
        </div>
        <div className="arrow"><img src={Arrow}/></div>
        
        
    </>
  )
}

export default About