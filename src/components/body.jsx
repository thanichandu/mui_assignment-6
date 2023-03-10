// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import mobile1 from "../Assets/mobile-1.svg"
// import mobile2 from "../Assets/mobile-2.svg"
// import mobile3 from "../Assets/mobile-3.svg"
import mobile4 from "../Assets/mobile-4.svg"
import React from 'react'
import "../css/body.css"
// import AndroidIcon from '@mui/icons-material/Android';
// import { Grid, makeStyles } from '@mui/material';
// import featureCard from '../objects/featurecards';
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Productanalysis from './productAnalysis';


export default function Body() {

    return (
        <>

            <div className='container-4'>
                <div className='container-leftside'>
                    <div className='app-features-heading'>
                        <h1>App Features</h1>
                        <Typography variant="body2" gutterBottom className='myTypography'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua.

                        </Typography>
                    </div>
                    <div className='container-subpart-2'>
                        <Button variant="contained" sx={{ color: "black", backgroundColor: 'white' }}>community</Button>
                        <Button variant="contained" sx={{ color: "black", backgroundColor: 'white' }}>Self Service</Button>
                        <Button variant="contained" sx={{ color: "black", backgroundColor: 'white' }}>Team Work</Button>
                    </div>
                    <Productanalysis className="demo" ml={"0%"} mt={"10%"} listMaxWidth={"63%"} clickMaxWidth={"27%"} />


                    {/* <div className='container-subpart-3'>
                        <h1>Great Product Analytics</h1>
                        <Typography variant="body2" gutterBottom className='myTypography'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore
                            et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.

                        </Typography>
                        <ul className='myTypography'>

                            <li>
                                <div>
                                    <Typography variant="body2" gutterBottom className='myTypography list-container-container-subpart-3'>
                                        <DoneIcon className='done-icon' />
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Typography variant="body2" gutterBottom className='myTypography  list-container-container-subpart-3'>
                                        <DoneIcon className='done-icon' />
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Typography variant="body2" gutterBottom className='myTypography list-container-container-subpart-3'>
                                        <DoneIcon className='done-icon' />
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed
                                    </Typography>
                                </div>
                            </li>

                        </ul>
                        <Typography variant="subtitle2" gutterBottom className='click-container-container-subpart-3 myTypography' color={"#3f51b5"}>
                            CLICK TO VIEW MORE<ArrowForwardIosIcon />
                        </Typography>

                    </div> */}
                </div>
                <div className='container-rightside'>
                    <img src={mobile4} alt="" />

                </div>

            </div>
            <div>

            </div>

        </>
    )







}
