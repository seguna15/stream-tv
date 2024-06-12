import React from 'react'



const Message = ({author, content}) => {
  return <span className='flex flex-col text-base'>
    <span className='font-bold'>
      {author}:
    </span>
    {content}
  </span>; 
}

export const Messages = ({messages}) => {
  return (
    <div className='flex flex-col relative bottom-0 h-[600px] dark:bg-slate-700 overflow-y-scroll'>
      {
        messages.length > 0 && messages.map(message => <Message key={`${message.author}-${message.content}-${message.date}`} author={message.author} content={message.content} />)
      }
    </div>
  )
}
