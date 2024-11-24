import { useEffect, useState } from "react";
import "./styles/clockTime.css";
export default function ClockTime() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeString = new Date(time).toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <div className="text-center">
            <h1 className="digits m-0 p-0">
                <span className="time-container digits">{timeString}</span>
            </h1>
        </div>
    );
}
