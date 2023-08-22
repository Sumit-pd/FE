import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const dispatch = useDispatch()

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
    dispatch({type : "SET_AGE" , payload : num})
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



