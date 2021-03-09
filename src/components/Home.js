import React from 'react';
import './home.css'
import Divider from '@material-ui/core/Divider';
import { Box, MenuList, MenuItem, Button } from '@material-ui/core';
import Portfolio from "./Portfolio";
import {Link} from "react-router-dom";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Center, HStack} from "@chakra-ui/react";
import HuluLogo from '../Logos/Hulu.jpg'
import airbnbLogo from '../Logos/airbnb.jpg'



export default function Home() {
    return(
        <div className='container'>
            <div className="box">
                <div className='navbar'>
                    <h3><a href='https://docs.google.com/document/d/e/2PACX-1vR0-_ctgqtTl26HuxAIRV12OmANYFHgfS5-QBgfc-yohFdgidSdx2QcDOqFPzIR-Tg1ofNjuEm5iAp_/pub'>Resumé</a></h3>
                    <h1>Rishi Challa</h1>
                    <ul>
                        <a href='https://www.linkedin.com/in/rishi-challa-7802b8179/'><LinkedInIcon /></a>
                        <a href='https://github.com/rishichalla67'><GitHubIcon /></a>
                        <a href='mailto:rishichalla67@gmail.com'><MailOutlineIcon /></a>
                    </ul>
                </div>
                <hr />
                <div className="body">
                    <h2> Projects </h2>
                    <Center>
                        <HStack spacing="17.5vw" paddingTop="50px">
                            {/*<a href="https://rishi-challa-hulu-clone.web.app/" target="blank">*/}
                            {/*    <img src={HuluLogo} alt='hulu logo' width='100px' height='70px'></img>*/}
                            {/*</a>*/}
                            <button><a href="https://rishi-challa-hulu-clone.web.app/" target="blank">Hulu UI Clone</a></button>
                            <p></p>
                            <h3><a href="https://github.com/rishichalla67/hulu-clone" target="blank"><GitHubIcon/></a></h3>
                        </HStack>
                    </Center>
                    <Center>
                        <HStack spacing="15.75vw" paddingTop="50px" paddingLeft="-500px">

                            {/*<a href="https://rishi-challa-airbnb-clone.web.app/" target="blank">*/}
                            {/*    <img src={airbnbLogo} alt='airbnb logo' width='100px' height='70px'></img>*/}
                            {/*</a>*/}
                            <button><a href="https://rishi-challa-airbnb-clone.web.app/" target="blank">Airbnb UI Clone</a></button>
                            <p></p>
                            <h3><a href="https://github.com/rishichalla67/airbnb_clone" target="blank"><GitHubIcon/></a></h3>
                        </HStack>
                    </Center>
                    <Center>
                        <HStack spacing="13.5vw" paddingTop="50px">

                            <a className='qiskit'>Qiskit/Python Game</a>
                            <p></p>
                            <h3><a href="https://github.com/mfarina1/qwack" target="blank"><GitHubIcon/></a></h3>
                        </HStack>
                    </Center>
                </div>
            </div>

        </div>
    );
}