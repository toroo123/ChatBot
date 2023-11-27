import React, { useState } from 'react';
import { question, answer } from './data';
import logo from '../img/logo.png'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    ' Сайн уу! Та асуух зүйлээ доорх сонголтоос сонгоно уу?',
  ]);
  const [input, setInput] = useState('');

  const getResponse = (message) => {
    for (const key in answer) {
      if (message.includes(key)) {
        return answer[key];
      }
    }
    return "Уучлаарай асуултыг ойлгосонгүй. Сонголтоос сонгоно уу!!!";
  };

  const clickme = (value) => {
    console.log(value);
    setInput(value);
  }

  const handleSendMessage = () => {
    if (input !== '') {
      setMessages([...messages, `${input}`, ` ${getResponse(input)}`]);
      setInput('');
    }
  };
  

  return (
    <div className='container'>
      <img src={logo} />
      <div className="chat-container">
        {messages.map((message, index) => (
          <div className={message.startsWith(' ') ? 'chatRobot' : 'chatUser'}>
            {message.startsWith(' ') ? <SmartToyOutlinedIcon fontSize="medium" />: <PersonOutlineOutlinedIcon fontSize="medium" />}
            <div key={index} className={message.startsWith(' ') ? 'bot-message' : 'user-message'}>
              {message}
            </div>
          </div>
        ))}

        <div className='questionBox'>
          {question.map((option, index) => (
              <button className='button' key={index} onClick={() => 
                clickme(option.question)
              }>
                <div className='question'>
                  {option.question}
                </div>
              </button>
          ))}
        </div>

        <div className='box'>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage} variant="outlined" endIcon={<SendIcon />}></Button>
        </div>
        
      </div>
    </div>
  );
};

export default Chatbot;
