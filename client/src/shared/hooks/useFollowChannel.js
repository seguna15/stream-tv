import { followChannelRequest } from '../../api'
import toast from 'react-hot-toast'

export const useFollowChannel = () => {

  const followChannel = async (channelId, onSuccess) => {
    const response = await followChannelRequest(channelId)

     if (response.exception) {
      console.log(response.exception)
       return toast.error(
         response.exception?.response?.data.message ||
           "Error occurred when fetching channel details"
       );
     }

     toast.success(response.data.message)

     onSuccess(true);

  }

  return {
    followChannel,
  }
}
