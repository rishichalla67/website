import React from 'react';
import './home.css'
import linkedin from './linkedin.png';
import github from './github.png';
import email from './gmail.png';
import { MenuList, MenuItem, Button } from '@material-ui/core';
import Portfolio from "./Portfolio";
import {Link} from "react-router-dom";


export default function Home() {
    return(
        <div className='bg'>
            <div className='back'></div>
            <div className='main'>

                <nav className='menu'>
                    <ul className='navbar'>
                        <li><a href='#About'>About</a></li>
                        <li><a href="https://docs.google.com/document/d/e/2PACX-1vQSOCDVCV_YbrB1KyDhdKNONmSOLaW64JMBg_o5k89yvveSHFOmzuQoKuIovXlQBg9RZJDLeW7Pzelf/pub" target="_blank">Resumė</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                        <li><a href='https://secure.actblue.com/donate/ms_blm_homepage_2019' target="_blank">Donate</a></li>

                    </ul>
                </nav>
                <div className='body'>
                    <h1>Hey, I'm Rishi Challa</h1>
                    <h2><Link to='/Portfolio' style={{textDecoration: 'none', color: 'blue', }}> Coding Projects </Link></h2>
                </div>
            </div>
            <div className='back'></div>
            <div className='about'>
                <div id='About'>
                    <h2>Who Am I?</h2>
                    <a>Currently a University of Florida Computer Science Undergraduate Senior</a>
                    <a>Interests: Web Design and App Development</a>
                    <a>Hobbies: Playing sports and video games</a>
                    <a className='link' href="https://docs.google.com/document/d/e/2PACX-1vQSOCDVCV_YbrB1KyDhdKNONmSOLaW64JMBg_o5k89yvveSHFOmzuQoKuIovXlQBg9RZJDLeW7Pzelf/pub" target="_blank"><button className='button'>Resumė</button></a>
                </div>
            </div>
            <div className='Contact'>
                <div id='Contact'>
                    <h2>Contact Me!</h2>
                    <p>I am available for freelance website building, feel free to send me an email!</p>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/rishi-challa-7802b8179/' target="_blank"><img src={linkedin}/></a></li>
                        <li><a href='https://github.com/rishichalla67' target="_blank"><img src={github}/></a></li>
                        <li><a href='mailto:rishichalla67@gmail.com' target="_blank"><img src={email}/></a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
}