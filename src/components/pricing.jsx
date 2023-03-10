import React from 'react'
import "../css/pricing.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import pricing from '../objects/pricing';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';




export default function Pricing() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" className='price-container' id="PriceMain">
                <Container className="price-container-box">
                    {
                        pricing.map((eachObj) => (
                            <Box className="pricing">
                                <Box className="pricing-upBox">
                                    <Box>
                                        <img src={eachObj.img} alt="" />
                                    </Box>
                                    <Box className="pricing-upBox-rightpart">
                                        <Typography variant="body1" gutterBottom className='myTypography-heading'>
                                            {eachObj.heading}

                                        </Typography>
                                        <Box className="pricing-upBox-rightpart-downpart">

                                            <Typography variant="body1" gutterBottom className='pricing-upBox-rightpart-downpart'>
                                                {"$"}{<Typography className='myTypography-heading' variant="h4" gutterBottom>
                                                    {eachObj.price}

                                                </Typography>}{"/mo"}

                                            </Typography>
                                        </Box>
                                    </Box>


                                </Box>
                                <Box className="pricing-middleBox">

                                </Box>
                                <Box className="pricing-downBox">
                                    <ul>
                                        <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list1}
                                            </Typography>
                                        </Typography></li>
                                        <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list2}
                                            </Typography>
                                        </Typography></li>
                                        <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list3}
                                            </Typography>
                                        </Typography></li>
                                        <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list4}
                                            </Typography>
                                        </Typography></li>
                                        <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list5}
                                            </Typography>
                                        </Typography></li>

                                    </ul>


                                </Box>
                                <Box className="margin-button">
                                    <Button size='medium' variant="contained" className='pricing-button'>Buy Now</Button>
                                </Box>
                            </Box>
                        ))
                    }



                </Container>
            </Container>
        </>
    )
}

                                        // <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                        //     <DoneIcon className='done-icon' />
                                        //     {eachObj.list2}
                                        // </Typography></li>
                                        // <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                        //     <DoneIcon className='done-icon' />
                                        //     {eachObj.list3}
                                        // </Typography></li>
                                        // <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                        //     <DoneIcon className='done-icon' />
                                        //     {eachObj.list4}
                                        // </Typography></li>
                                        // <li><Typography className='list-containerPricing' variant="body2" gutterBottom >
                                        //     <DoneIcon className='done-icon' />
                                        //     {eachObj.list5}
                                        // </Typography></li>