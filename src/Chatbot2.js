import React, { useState } from 'react';
import { data } from './data';
import './/style.css';

const Chatbot1 = () => {
  const [messages, setMessages] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleOptionSelect = (question) => {
    setSelectedQuestion(question);
    setMessages([...messages, { content: question.answer, isUser: true }]);
  };

  const handleBackClick = () => {
    setMessages(messages.slice(0, -1));
    setSelectedQuestion(null);
  };

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
          {message.content}
        </div>
      ))}
      <div className="options-container">
        {selectedQuestion ? (
          <button onClick={handleBackClick} className="back-button">
            Back
          </button>
        ) : (
          data.map((option, index) => (
            <button key={index} onClick={() => handleOptionSelect(option)}>
              {option.question}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default Chatbot1;
