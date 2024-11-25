import "./App.css";
import ClockTime from "./components/ClockTime";
import Weekdays from "./components/Weekdays";

function App() {
    return (
        <div className="App d-flex align-items-center justify-content-center">
            <div className="auto-width text-white border rounded-2 p-4 d-flex flex-column flex-sm-row align-items-center m-5">
                <div className="mb-3 mb-md-0 me-0 me-md-3">
                    <Weekdays />
                </div>
                <ClockTime />
            </div>
        </div>
    );
}

export default App;
