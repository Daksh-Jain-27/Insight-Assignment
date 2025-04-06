import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Career from "./pages/Career";
import Personal from "./pages/Personal";
import Miscellaneous from "./pages/Miscellaneous";

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/career" element={<Career />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
        </Routes>
    </Router>
);

export default App;
