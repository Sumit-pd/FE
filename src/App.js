import './App.css';
import ChatBotScreen from './components/ChatBotScreen';
import Enroll from './components/Enroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-chatbot-kit/build/main.css';
import Data from './components/Data'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element=<ChatBotScreen /> />
          <Route path='/' element=<Enroll /> />
          <Route path='/end' element=<Data /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
