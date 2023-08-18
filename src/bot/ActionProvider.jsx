import React, { useState, useEffect } from 'react';
import { createClientMessage, createCustomMessage } from 'react-chatbot-kit';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const name = () => {
    const message = createChatBotMessage("Enter Your Name")
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }


  const age = () => {
    const message = createChatBotMessage("Enter Your Age",
      {
        widget: "Age"
      })
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }


  const handleGotIt = () => {
    const botMessage = createClientMessage("Got It ");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    setTimeout(() => {
      name()
    }, 300);

  }


  const handleAgeClick = (num) => {
    const botMessage = createClientMessage(num);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    setTimeout(() => {
      finalMessage()
    }, 300)
  }
  const finalMessage = () => {
    const botMessage = createChatBotMessage("Thank You", {
      widget: 'finalMessage'
    })
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleGotIt, name, age, handleAgeClick },
        });
      })}
    </div>
  );
};

export default ActionProvider;



