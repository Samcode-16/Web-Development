import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 style={{ color: "green"}}>
                A Computer Science Portal for Geeks
            </h1>
            <button onClick= { () => navigate(-1) }>
                Go Back to Home
            </button>
        </>
    );
};

export default About;
