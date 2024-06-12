import  { useEffect } from 'react'
import { closeChatSubscription, getChatHistory, sendChatMessage } from '../../socketConn'
import { useUserDetails } from './useUserDetails';
import { useStore } from '../../store';

export const useChatHistory = (channelId) => {

  const {chatHistory} = useStore();
  const {isLogged, username} = useUserDetails()

  useEffect (() => {
    getChatHistory(channelId)

    //When the component get unmounted
    return () => {
        closeChatSubscription(channelId)
    }
  },[]);

  const sendMessage = (message) => {
    sendChatMessage(channelId,{
        author: isLogged ? username : 'Guest',
        content: message
    })
  }

  return {
    messages: chatHistory?.channelId === channelId ? chatHistory.messages : [],
    sendMessage,
  }
}
