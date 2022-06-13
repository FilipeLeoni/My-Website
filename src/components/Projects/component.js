import React from 'react'
import Source from "../Media/Source.png"
import "../Projects/style.css"

function Component(props) {
  return (
        <div className='project-card'>
        <a href={props.link} target="_blank"><img src={props.img}
         id="banner"/><p id='Click'>Click to open live project.</p></a>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={props.github}><img src={Source} id="git"/></a>
        </div>
    
  )
}

export default Component