import React from "react";
import './Portfolio.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'


export default function Portfolio() {
    return(
        <div className='Portfolio'>

            <div className="title">
                <h2>
                    <Link to='/'>
                        <HomeIcon />
                    </Link>
                </h2>
                <h1> Rishi's Coding Projects</h1>
            </div>

            <div className="box">
                <a href="https://rishi-challa-hulu-clone.web.app/" target="blank">Hulu UI Clone</a>
                <p></p>
                <h3><a href="https://github.com/rishichalla67/hulu-clone" target="blank"><GitHubIcon/></a></h3>
            </div>
            <div className="box">
                <a href="https://rishi-challa-airbnb-clone.web.app/" target='blank'>Airbnb UI Clone</a>
                <p></p>
                <h3><a href="https://github.com/rishichalla67/airbnb_clone" target="blank"><GitHubIcon/></a></h3>
            </div>
        </div>
    );
}