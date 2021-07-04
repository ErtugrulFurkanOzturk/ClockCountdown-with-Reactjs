import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    counter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        color: "#ffd700",
        fontSize: 22,
        border: "10px solid #000080",
        borderRadius: "10",
        background: "rgba(0,0,0,0.5)",
    },
}));

const Countdown = () => {
    const classes = useStyles();

    const [date, setDate] = useState(() => {
        const localDate = localStorage.getItem("date");
        return localDate ? moment(JSON.parse(localDate)) : moment().add(5, "hours");
    });

    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let interval = useRef();


    useEffect(() => {
        startcountdown();
        return clearInterval(interval.current);
    }, [date]);

    const startcountdown = () => {
        interval = setInterval(() => {
            localStorage.setItem("date", JSON.stringify(date));
            const now = moment();
            const timedifferance = date - now;
            const hours = moment.duration(timedifferance).hours();
            const minutes = moment.duration(timedifferance).minutes();
            const seconds = moment.duration(timedifferance).seconds();

            if (timedifferance < 0) {
                clearInterval(interval.current);
            } else {
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }

        }, 1000);
    };

    return (
        <div className={classes.counter}>
            <div>
                <p>{hours}</p>
                <p><small>Hour</small></p>
            </div>
            <div>
                <p>{minutes}</p>
                <p><small>Minute</small></p>
            </div>
            <div>
                <p>{seconds}</p>
                <p><small>Second</small></p>
            </div>
        </div>
    );
}

export default Countdown;