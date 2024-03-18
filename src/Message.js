import React from 'react'
import './Message.css'

const Message = ({message}) => {
    let stlDirection;
    if(message.source === 'bot') {
        stlDirection = {"flex-direction": "row"};
    } else {
        stlDirection = {"flex-direction": "row-reverse"};
    }
  return (
    <div className='each-msg-div' style={stlDirection}>
        <div className='filler'></div>
        <div className={`message ${message.source}`}>
            {message.messageText}
        </div>
    </div>
  )
}

export default Message