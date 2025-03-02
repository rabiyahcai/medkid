class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleUserMessage = async (message) => {
    // Send the user's message to your Django backend
    const response = await fetch('http://127.0.0.1:8000/api/diagnose/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message }),
    });

    const data = await response.json();
    const botMessage = this.createChatBotMessage(data.reply);

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };
}

export default ActionProvider;
