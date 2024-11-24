import "./App.css";
import ClockTime from "./components/ClockTime";
import Weekdays from "./components/Weekdays";

function App() {
    return (
        <div className="App d-flex align-items-center justify-content-center min-vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-white border rounded-2 p-4">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-4 col-md-3">
                                <Weekdays />
                            </div>
                            <div className="col-12 col-sm-8 col-md-9 text-center">
                                <ClockTime />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
