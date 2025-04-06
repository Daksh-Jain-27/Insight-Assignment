import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <Link className="navbar-brand" to="/">Senior Survey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/academics">Academics</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/career">Career</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/personal">Personal</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/miscellaneous">Miscellaneous</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;