import React from "react";
import './Portfolio.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'
import { Box } from "@chakra-ui/react"
import {Divider, HStack, Center, Square, Circle } from "@chakra-ui/react"


export default function Portfolio() {
    return(
        <div className='Portfolio'>
            <Center>
                <Box className="projectBox" w="50%" p="10" borderWidth="5px" borderRadius="lg" >
                    <div className="title">
                        {/*<h2>*/}
                        {/*    <Link to='/'>*/}
                        {/*        <HomeIcon />*/}
                        {/*    </Link>*/}
                        {/*</h2>*/}
                        <h1>Projects</h1>
                    </div>

                    <div className="box">
                        <Center>
                            <HStack spacing="300px" paddingTop="50px">
                                <a href="https://rishi-challa-hulu-clone.web.app/" target="blank">Hulu UI Clone</a>
                                <p></p>
                                <h3><a href="https://github.com/rishichalla67/hulu-clone" target="blank"><GitHubIcon/></a></h3>
                            </HStack>
                        </Center>
                    </div>
                    <Divider borderWidth="3px" color="teal.600"/>
                    <div className="box">
                        <Center>
                            <HStack spacing="295px" paddingTop="50px">
                                <a href="https://rishi-challa-airbnb-clone.web.app/" target='blank'>Airbnb UI Clone</a>
                                <p></p>
                                <h3><a href="https://github.com/rishichalla67/airbnb_clone" target="blank"><GitHubIcon/></a></h3>
                            </HStack>
                        </Center>
                    </div>
                    <Divider borderWidth="3px" bg="#FFFFFF"/>
                    <div className="box">
                        <Center>
                            <HStack spacing="180px" paddingTop="50px">
                                <a>Python Quantum Computing Educational Game</a>
                                <p></p>
                                <h3><a href="https://github.com/mfarina1/qwack" target="blank"><GitHubIcon/></a></h3>
                            </HStack>
                        </Center>
                    </div>
                </Box>
            </Center>
        </div>
    );
}