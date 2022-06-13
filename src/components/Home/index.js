import React from "react";
import "../Home/style.css"
import { Player } from '@lottiefiles/react-lottie-player';
import Linkedin from "../Media/Linkedin.png"
import Github from "../Media/Github.png"
import Arrow from "../Media/Arrow.png"

const Home = () => {
    return (
        <>
        <div className="home">
            <div className="title">
                <h1 className="home-title">HI, <br/>I’M <span>FILIPE LEONI </span><br/>FRONT-END DEVELOPER</h1>
                <p className="home-description">Web Developer - Mobile - UI/UX</p>
            <a target="_blank" href="https://www.linkedin.com/in/filipe-leoni-5745551a8/"><img src={Linkedin} className="social"/></a>
            <a target="_blank" href="https://github.com/FilipeLeoni"><img src={Github}className="social"/></a>
            </div>
            <Player
             autoplay loop
            src="https://assets4.lottiefiles.com/packages/lf20_rycdh53q.json"
             className="gif">
        </Player>
        
        </div>
        <div className="arrow"><img src={Arrow}/></div>
        
        </>


    )
}

export default Home