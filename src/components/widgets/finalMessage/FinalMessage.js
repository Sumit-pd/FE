import React, { useEffect, useState } from "react";
import './finalMessage.css'
import { useNavigate } from "react-router-dom";

const FinalMessage = (props) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            navigate('/end');
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const buttonsMarkup = (
        <div className="option-button">
            The bot will exit in {count} seconds
        </div>
    );

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default FinalMessage;
