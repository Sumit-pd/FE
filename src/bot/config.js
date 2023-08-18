import GotIt from '../components/widgets/gotIt/GotIt'
import Age from '../components/widgets/age/Age';
import FinalMessage from '../components/widgets/finalMessage/FinalMessage';

import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello. Welcome to Student Info System`, {
      widget: "Gotit",
    })
  ],
  widgets: [
    {
      widgetName: "Gotit",
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <Age {...props} />
    },
    {
      widgetName: "finalMessage",
      widgetFunc: (props) => <FinalMessage {...props} />
    }
  ],
};

export default config;


