import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Importing Routes
import Home from "./Routes";
import BoxShadow from "./Routes/BoxShadow";
import Buttons from "./Routes/Buttons";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/box-shadow" element={<BoxShadow />} />
                <Route path="/buttons" element={<Buttons />} />
            </Routes>
        </Router>
    );
}

export default App;
