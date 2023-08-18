import React from "react";
import "./age.css";

const Age = (props) => {
    const ageOptions = [];

    for (let i = 18; i <= 40; i++) {
        ageOptions.push(
            <button key={i} className="option-button" onClick={() => props.actions.handleAgeClick(i)}>
                {i}
            </button>
        );
    }

    return <div className="options-container">{ageOptions}</div>;
};

export default Age;
