import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Acad from "./images/academics.png";
import Career from "./images/career.png";
import Personal from "./images/personal.png";
import Miscellaneous from "./images/miscellaneous.png";
import { Link } from "react-router-dom";


export default function SeniorSurveyPage() {
    return (
        <div className="survey-container">
            {/* Header */}
            <div className="header">
                <h1>The Senior Survey</h1>
            </div>
            <div className="academics-section" id="academics">
                <h2 className="section-title">Academics</h2>

                <div className="image-card">

                    <Link className="navbar-brand" to="/academics"><img
                        src={Acad}
                        alt="Academics background"
                        className="background-image"
                    /></Link>
                </div>

                <p className="description">
                    This part of the survey captures the academic experiences and perceptions of graduating seniors
                    from IITB. It covers course satisfaction, CPI satisfaction, academic interests, acad-extracurricular
                    balance, etc.
                </p>
            </div>

            <div className="academics-section" id="career">
                <h2 className="section-title">Career</h2>

                <div className="image-card">

                    <Link className="navbar-brand" to="/career"><img
                        src={Career}
                        alt="Career background"
                        className="background-image"
                    /></Link>
                </div>

                <p className="description">
                This section explores the career outcomes and aspirations of IIT Bombay's graduating seniors. It includes data on job placements, higher education plans, internships, etc.
                </p>
            </div>

            <div className="academics-section" id="personal">
                <h2 className="section-title">Personal</h2>

                <div className="image-card">

                    <Link className="navbar-brand" to="/personal"><img
                        src={Personal}
                        alt="Personal background"
                        className="background-image"
                    /></Link>
                </div>

                <p className="description">
                The personal section of the survey delves into the overall well-being and personal growth of the graduating seniors. It examines aspects such as campus life, extracurricular involvement and mental health.
                </p>
            </div>

            <div className="academics-section" id="miscellaneous">
                <h2 className="section-title">Miscellaneous</h2>

                <div className="image-card">

                    <Link className="navbar-brand" to="/miscellaneous"><img
                        src={Miscellaneous}
                        alt="Miscellaneous background"
                        className="background-image"
                    /></Link>
                </div>

                <p className="description">
                In this section we find out the graduating batch's opinions on their overall experience, satisfaction with mess food, their involvement in the campus elections, etc. We also have included some comments they made about their time and experiences at the end.
                </p>
            </div>
        </div>
    );
}

