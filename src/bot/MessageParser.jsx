import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {


        const data = parseInt(message)
        console.log(data)
        if (isNaN(data)) {
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