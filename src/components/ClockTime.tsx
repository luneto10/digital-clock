import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

    const timeChars = timeString.split("");
    // const times = ["2", "0", ":", "2", "0", ":", "2", "0"];
    return (
        <div className="container text-center">
            <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                    <h1 className="digits m-0 p-0">
                        <span className="time-container digits">
                            {timeChars.map((char, index) => (
                                <span key={index} className="time-char digits">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
