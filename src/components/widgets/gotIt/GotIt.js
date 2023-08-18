import React from "react";
import './gotIt.css'


const GotIt = (props) => {
  const Button = {
    text: "Got It",
    handler: props.actions.handleGotIt,
    id: 1,
  };

  const buttonsMarkup = (
    <button onClick={Button.handler} className="option-button">
      {Button.text}
    </button>
  );

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default GotIt;
