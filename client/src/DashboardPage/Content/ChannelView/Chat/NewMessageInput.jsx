import React, { useState } from 'react'

export const NewMessageInput = ({sendMessage}) => {
  const [messageContent, setMessageContent] = useState('')

  const handleValueChange = (e) => {
    setMessageContent(e.target.value)
  }


  const handleSendMessage = () => {
    //set message to server
    if(messageContent.length > 0){
      sendMessage(messageContent);
      //after sending message reset input
      setMessageContent("");
    }
    
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSendMessage()
    }
  }

  console.log(messageContent)
  return (
    <div>
      <textarea
        rows={5}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Type message...."
        value={messageContent}
        onChange={handleValueChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
