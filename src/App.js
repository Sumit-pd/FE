import './App.css';
import ChatBotScreen from './components/widgets/ChatBotScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-chatbot-kit/build/main.css';
import Data from './components/widgets/Data';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/chatbot' element=<ChatBotScreen /> />
          <Route path='/end' element=<Data /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
