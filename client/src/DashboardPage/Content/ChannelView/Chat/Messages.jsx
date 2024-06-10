import React from 'react'

const messages = [
  {
    id: 1,
    author: 'John',
    content:  'Hello world'
  },
  {
    id: 2,
    author: 'John',
    content:  'Hello world'
  },
  {
    id: 3,
    author: 'John',
    content:  'Hello world'
  },
  {
    id: 4,
    author: 'John',
    content:  'Hello world'
  },
  {
    id: 5,
    author: 'John',
    content:  'Hello world'
  },
]

const Message = ({author, content}) => {
  return <span className='flex flex-col text-base'>
    <span className='font-bold'>
      {author}:
    </span>
    {content}
  </span>; 
}

export const Messages = () => {
  return (
    <div className='flex flex-col h-[500px]'>
      {
        messages.length > 0 && messages.map(message => <Message key={message.id} author={message.author} content={message.content} />)
      }
    </div>
  )
}
