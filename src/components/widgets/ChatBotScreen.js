import config from '../../bot/config';
import ActionProvider from '../../bot/ActionProvider';
import MessageParser from '../../bot/MessageParser';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
function ChatBotScreen() {
  return (
    <div className="center">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />

    </div>
  );
}

export default ChatBotScreen;
