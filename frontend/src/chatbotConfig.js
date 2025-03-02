import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'MedKidBot';

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How can I assist you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
};

export default config;
