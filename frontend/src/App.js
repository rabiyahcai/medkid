import './App.css';
import MyPage from './MyPage';
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function App() {
  return (
    <div className="App">
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
}

export default App;
