import React, { useState } from 'react'
import './ChatUI.css'
import MessageContainer from './MessageContainer'

const ChatUI = () => {
    const [messages, setMessages] = useState([{
        source: 'bot',
        messageText: 'Hi How can I help you today?'
    }]);
    const [message, setMessage] = useState('');
    const handleClick = () => {
        setMessages([...messages, {
            source: 'user',
            messageText: message
        }]);
        setMessage('');
    }
  return (
    <>
        <div className='msg-area'>
        <MessageContainer messages={messages}></MessageContainer>
        </div>
        <div className='msg-box'>
            <textarea className='txtarea' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <div aria-label='button' onClick={handleClick}>Send</div>
        </div>
    </>
  )
}

export default ChatUI