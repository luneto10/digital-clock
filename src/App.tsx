import "./App.css";
import ClockTime from "./components/ClockTime";
import Weekdays from "./components/Weekdays";

function App() {
    return (
        <div className="App d-flex align-items-center justify-content-center">
            <div className="text-white border rounded-2 p-4 d-inline-block">
                <div className="d-flex flex-column flex-md-row align-items-center">
                    <div className="mb-3 mb-md-0 me-0 me-md-3">
                        <Weekdays />
                    </div>
                    <ClockTime />
                </div>
            </div>
        </div>
    );
}

export default App;
