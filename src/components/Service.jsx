import Typography from '@mui/material/Typography';
import mobile3 from "../Assets/mobile-3.svg"
import React from 'react'
import "../css/body.css"
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import "../css/service.css"
import Productanalysis from './productAnalysis';


export default function Service() {
    return (
        <div className='analysis-container' id="ServiceMain">
            <div className='analysis-image'>
                <img src={mobile3} alt="" />

            </div>
            <Productanalysis ml={"8%"} mt={"20%"} listMaxWidth={"70%"} clickMaxWidth={"30%"} />
            
        </div>
    )
}
