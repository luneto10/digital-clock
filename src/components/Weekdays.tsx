import { useEffect, useState } from "react";

export default function Weekdays() {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const [currentDay, setCurrentDay] = useState(new Date().getDay());

    function checkDayChange() {
        const newDay = new Date().getDay();
        if (newDay !== currentDay) {
            setCurrentDay(newDay);
        }
    }

    useEffect(() => {
        const interval = setInterval(checkDayChange, 1000);
        return () => clearInterval(interval);
    }, [currentDay]);

    return (
        <div>
            <style>
                {`
                    .fs-11 {
                        font-size: 11px;
                    }
                    ul{
                        font-family: "Orbitron", sans-serif;
                    }
                `}
            </style>
            <ul className="list-unstyled m-0 d-inline-block">
                {daysOfWeek.map((day, index) => (
                    <li
                        key={index}
                        className={`${
                            index === currentDay
                                ? "fw-bold text-white"
                                : "text-muted"
                        } fs-11 mb-1`}
                    >
                        {day}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
