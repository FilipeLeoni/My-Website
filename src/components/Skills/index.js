import React from 'react'
import "../Skills/style.css"
import { Player } from '@lottiefiles/react-lottie-player';
import Html from "../Media/html5.png"
import Css3 from "../Media/css3.png"
import jsLogo from "../Media/jsLogo.png"
import nodeLogo from "../Media/nodeLogo.png"
import reactLogo from "../Media/reactLogo.png"
import gitLogo from "../Media/gitLogo.png"
import Arrow from "../Media/Arrow.png"

function Skills() {
  return (
    <>
        <div className='skills'>
            <div className='skills-section'>
                <h2 className='skills-title'>Skills</h2>
                <p className='skills-description'>Tap or hover to see description</p>
            </div>
            <div className='skills-media'>
            <section className='skills-cards'>
            <div className='card1'><img className="img-card1"src={Html}/> 
            <div id='text'><h4>HTML5</h4> <p>It is a markup language <br/> used in building <br/> web pages.</p></div></div>
            <div className='card2'><img className="img-card2"src={Css3}/>
            <div id='text'><h4>CSS3</h4> <p>It is a language <br/>for adding style to <br/>a web document.</p></div></div>
            <div className='card3'><img className="img-card3"src={jsLogo}/>
            <div id='text'><h4>JavaScript</h4> <p>It is a programming <br/>language that allows <br/>you to implement <br/>complex items<br/> in web pages.</p></div></div>
            <div className='card4'><img className="img-card4"src={nodeLogo}/>
            <div id='text'><h4>NodeJs</h4> <p>Is a platform on <br/>which it is possible<br/> to create Javascript <br/>applications without <br/>relying on a browser <br/>for execution.</p></div></div>
            <div className='card5'><img className="img-card5"src={reactLogo}/>
            <div id='text'><h4>ReactJs</h4> <p>React is a library <br/> focused on creating<br/>  web interfaces.</p></div></div>
            <div className='card6'><img className="img-card6"src={gitLogo}/>
            <div id='text'><h4>Git</h4> <p>It is a distributed<br/>version control<br/>system, mainly used in<br/>software development.</p></div></div>
            </section>
            <Player
            autoplay loop
           src="https://assets10.lottiefiles.com/private_files/lf30_djaaykcg.json"
           id='gif'>
            </Player>
            </div>
            <div className="arrow"><img src={Arrow}/></div>
        </div>
    
    </>
  )
}

export default Skills