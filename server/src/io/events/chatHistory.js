import ChannelModel from "../../channels/Channel.model.js";
import MessageModel from "../../messages/Message.model.js";

export const emitChatHistory = async (socket, channelId) => {
    try {
        const channel = await ChannelModel.findById(channelId).populate('messages')

        if(channel) {
            return socket.emit('chat-history', {
                channelId: channel.id,
                messages: channel.messages.map(m => ({
                    author: m.author,
                    content: m.content
                }))
            })
        }
        console.log(channelId)
        
        socket.emit("chat-history", {
          errorOccurred: true,
        });
    } catch (error) {
        console.log(error)
        socket.emit('chat-history', {
            errorOccurred: true,
        });
    }
}


export const emitChatMessage = async (io, messageData) => {
    try {
        const channel = await ChannelModel.findById(messageData.toChannel)
        if(channel) {
            const newMessage = new MessageModel({
              content: messageData.message.content,
              author: messageData.message.author,
              date: new Date()
            });
            
            await newMessage.save();

            channel.messages.push(newMessage._id);

            await channel.save();

            io.to(messageData.toChannel).emit('chat-message', newMessage)

        }

        
    } catch (error) {
        console.log(error)
    }
}

