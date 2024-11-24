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
            <h1 className="digits display-4 d-block d-sm-none">{timeString}</h1>
            <h1 className="digits display-3 d-none d-sm-block d-md-none">
                {timeString}
            </h1>
            <h1 className="digits display-2 d-none d-md-block d-lg-none">
                {timeString}
            </h1>
            <h1 className="digits display-1 d-none d-lg-block">{timeString}</h1>
        </div>
    );
}
