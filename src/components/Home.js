import React from 'react';
import './home.css'
import Divider from '@material-ui/core/Divider';
import linkedin from './linkedin.png';
import github from './github.png';
import email from './gmail.png';
import { Box, MenuList, MenuItem, Button } from '@material-ui/core';
import Portfolio from "./Portfolio";
import {Link} from "react-router-dom";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';




export default function Home() {
    return(
        <div style={{backgroundColor: 'lightcyan', height:"100vh"}} className='container'>
            <div className="box">
                <div className='navbar'>
                    <h3>Resumé</h3>
                    <h1>Rishi Challa</h1>
                    <ul>
                        <a href='https://www.linkedin.com/in/rishi-challa-7802b8179/'><LinkedInIcon /></a>
                        <a href='https://github.com/rishichalla67'><GitHubIcon /></a>
                        <a href='mailto:rishichalla67@gmail.com'><MailOutlineIcon /></a>
                    </ul>
                </div>
                <hr />
            </div>
        </div>
    );
}