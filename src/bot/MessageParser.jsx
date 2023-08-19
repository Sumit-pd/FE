import React from 'react';
import { useDispatch } from 'react-redux';

const MessageParser = ({ children, actions }) => {
    const dispatch = useDispatch()

    const parse = (message) => {
        const data = parseInt(message)
        if (isNaN(data)) {
            dispatch({ type: "SET_NAME", payload: message })
            actions.age()
        }
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;