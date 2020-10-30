import React, {useEffect, useState} from 'react';
import moment from 'moment';

const CountDown = ({endTime}) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isTimeUp, setTimeUp] = useState(false);

    useEffect(() => {
        calculateCountDown(endTime);
        setInterval(() => {
            calculateCountDown(endTime);
        }, 1000);
    }, [days, hours, minutes, seconds]);

    const calculateCountDown = (endTime) => {
        const time = Date.parse(moment(endTime).format('LLL')) - Date.parse(new Date());
        if (time < 0) {
            setTimeUp(true);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };
    const leadingNum = (num) => {
        return num < 10 ? "0" + num : num;
    };
    return (
        <>
            <div>
                {!isTimeUp ? (
                    <>
                        <div className="Clock-days">
                            <span style={{fontWeight: 'bolder'}}>
                                {leadingNum(hours)} Hours - {leadingNum(minutes)} Minutes - {leadingNum(seconds)} Seconds
                            </span>
                        </div>
                    </>
                ) : (
                    <div><span style={{fontWeight: 'bolder'}}>Auction closed</span></div>
                )}
            </div>
        </>
    )
};

export default CountDown;