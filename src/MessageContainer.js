import React from 'react'
import Message from './Message'

const MessageContainer = ({messages}) => {

  return (
    <>
      {messages.map(msg => <Message message={msg}></Message>)}
    </>
  )
}

export default MessageContainer