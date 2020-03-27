import React, { useState, useEffect } from 'react';

export default function Timer(props){

    const [timestampEnd] = useState(new Date().getTime() + props.minutes*60*1000);
    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
    const [progress,setProgress] = useState(0);
    const [timeFormatted,setTimeFormatted] = useState('00:00');

    function tick(){
        setTimeLeft(calcTimeLeft());
    }

    function calcTimeLeft(){
        return Math.ceil((timestampEnd - new Date().getTime())/1000)*1000;
    }

    useEffect(()=>{
        if(timeLeft<=0){
            props.onFinish && props.onFinish();
            return;
        }

        setProgress(100 - Math.floor(timeLeft/(props.minutes*60*1000)*100));
        
        setTimeFormatted(Math.floor(timeLeft/1000/60)+':'+('0'+(timeLeft/1000)%60).substr(-2,2));

        const timer = setTimeout(tick,1000);

        return () => clearTimeout(timer);
    },[timeLeft,timestampEnd])    

    useEffect(()=>{
        if(props.onUpdate){
            props.onUpdate(timeFormatted)
        }
    },[timeFormatted])

    return (
        <div>
            <div className="progress" style={{width:progress+'%'}}></div>
            <div className="clock">{timeFormatted}</div>
        </div>
    );


}