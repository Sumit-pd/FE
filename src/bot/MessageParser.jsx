import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../Actions/actions';

const MessageParser = ({ children, actions }) => {
    const dispatch = useDispatch()

    const parse = (message) => {
        const data = parseInt(message)
        console.log(data)
        if (isNaN(data)) {
            dispatch(setName(message))
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