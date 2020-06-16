import React from 'react';
import './home.css'
export default function Home() {
    return(
        <div className='bg'>
            <div className='back'></div>
            <div className='main'>

                <nav className='menu'>
                    <ul>
                        <li><a href='#About'>About</a></li>
                        <li><a href="https://docs.google.com/document/d/e/2PACX-1vQSOCDVCV_YbrB1KyDhdKNONmSOLaW64JMBg_o5k89yvveSHFOmzuQoKuIovXlQBg9RZJDLeW7Pzelf/pub" target="_blank">Resume</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                        <li><a href='https://secure.actblue.com/donate/ms_blm_homepage_2019' target="_blank">Donate</a></li>
                    </ul>
                </nav>
                <h1>Hey, I'm Rishi Challa</h1>
            </div>
            <div className='back'></div>
            <div className='about'>
                <div id='About'>
                    <h2>Who Am I?</h2>
                    <p>Currently a University of Florida Computer Science Undergraduate Senior</p>
                    <p>Interests: Web Design and App Development</p>
                    <p>Hobbies: Playing sports and video games</p>
                </div>
            </div>
            <div className='Contact'>
                <div id='Contact'>
                    <h2>Contact Me!</h2>
                    <p>Currently a University of Florida Computer Science Undergraduate Senior</p>
                    <p>Interests: Web Design and App Development</p>
                    <p>Hobbies: Playing sports and video games</p>
                </div>
            </div>

        </div>
    );
}