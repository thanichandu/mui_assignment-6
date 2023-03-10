import React from 'react'
import "../css/body.css"
import "../css/highlight.css"
import Button2 from "./button2"

export default function Highlight({ highlight, isCheck }) {
    return (
        <div className='service-container myTypography'>
            <div className='service-container-centerPart'>
                {
                    highlight.map((eachObj) => (
                        <>
                            <div className='h1-div'>
                                <h1 style={{ textAlign: "center" }}>{eachObj.head}</h1>
                            </div>
                            <p className='service-container-para'>{eachObj.para}</p>
                        </>

                    ))
                }
                <div className='highlists-btn'>
                {

                    (isCheck === true) && <Button2 justify={"center"} margintop={"8%"} />
                }
                </div>
            </div>

        </div>
    )
}
