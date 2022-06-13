import React from 'react'
import "../Projects/style.css"
import Component from './component'
import Calculator from "../Media/calculator.png"
import Portfolio from "../Media/Portfolio.png"
import Landing from "../Media/Landing.png"
import Buscador from "../Media/Buscador.png"

function Projects() {
  return (
    <section className='project'>
        <h2 id="title">My Projects</h2>
        <div className='projects-comp'>
        <Component name="Calculator React" description="The project consists of a simple calculator made with ReactJS" link="https://react-calculator-seven-gold.vercel.app/" img={Calculator} github="https://github.com/FilipeLeoni/React-Calculator-"/>
        <Component name="My Website" description="I designed and implemented the site you are browsing right now!" link="https://react-calculator-seven-gold.vercel.app/" img={Portfolio} github="https://github.com/FilipeLeoni/React-Calculator-"/>
        <Component name="Landing Page " description="A responsive website made with html, css and js. The Project is under development." link="https://focused-leakey-3e4c4c.netlify.app/" img={Landing} github="https://github.com/FilipeLeoni/Responsive-Website"/>
        <Component name="Cep Finder" description="Website with the functionality to find the address by the typed zip code."link="https://react-calculator-seven-gold.vercel.app/" img={Buscador} github="https://github.com/FilipeLeoni/React-Calculator-"/>
        </div>
    </section>
  )
}

export default Projects