/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import "./FertilizerResult.css"
import { useNavigate, useLocation } from 'react-router-dom';
import { output_descriptions, label_image_paths } from './FertilizerOutputs';

export function FertilizerResult() {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;

    console.log("LOCATION : ", location)
    console.log("LOCATION STATE : ", locationState)

    // Runs at Initial Render. Redirects if State is null.
    useEffect(() => {
        if (locationState == null) {
            console.log("Redirecting to /PestManagement...")
            navigate("/PestManagement")
        }
    }, [locationState, navigate]);

    if (locationState == null) {
        console.log("LocationState is null")
        return null;
    }

    const predicted_fertilizer = locationState["predicted_fertilizer"];
    const output_image_path = label_image_paths[predicted_fertilizer];
    console.log('Image Path : ', output_image_path)

    return (
        <>
           <p className="fertilizer-result-p"> You should use <b> {predicted_fertilizer.toUpperCase()} </b> fertilizer in your farm !</p>
            <img className="fertilizer-result-img" src={output_image_path}  />
            <p className="fertilizer-result-description"> {output_descriptions[predicted_fertilizer]} </p>
            <button className="fertilizer-try-btn" onClick={() => navigate("/PestManagement")}> Try again ? </button>
        </>
    );
}