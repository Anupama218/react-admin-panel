import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './circularbar.css'
function CircularBar(){
    const [percentage, setPercentage]=useState(30);
    const per = 40

    useEffect(() => {
        setPercentage(per);
        }, [per]);

    return (
        <div className='ProgressBar'>
            <div className='ProgressBar-t'>
                <span className='t-name'>Customers</span>
                <span className='ProgressBar-c'>Customers that buy product</span>
            </div>
            <div className='p-graph'>
                <div className='p-chart' style={{ width: '150px', position:'relative'}}>
                <CircularProgressbar
                    value={percentage}
                    text = {`${percentage}%`}
                    styles={buildStyles({
                    pathColor: `rgb(177, 177, 225)`,
                    trailColor:'ghostwhite',
                    textColor: 'black',
                    textSize: '16px',
                    })}
                >
                </CircularProgressbar>
                </div>
            </div>
        </div>
    )
}
export default CircularBar;