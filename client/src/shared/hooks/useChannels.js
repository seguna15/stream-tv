import React, { useEffect, useState } from 'react'
import { getChannelsRequest, getFollowedChannelsRequest } from '../../api'
import toast from 'react-hot-toast'

export const useChannels = () => {
    const [channels, setChannels] = useState(null)

    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest();

        if (channelsData.exception) {
            return toast.error(
                channelsData.exception?.response?.data.message ||
                "Error occurred when fetching channels"
            );
        }

        if(!isLogged) {
            return setChannels({
                channels: channelsData.data.channels,
            })
        }

        const followedChannelsData = await getFollowedChannelsRequest();

        if (followedChannelsData.exception) {
          return toast.error(
            followedChannelsData.exception?.response?.data.message ||
              "Error occurred when fetching followed channels"
          );
        }


        setChannels({
          channels: channelsData.data.channels,
          followedChannels: channelsData.data.channels.filter(channel => followedChannelsData.data.followedChannels.includes(channel.id)),
        });
    }

  

    return {
      getChannels,
      isFetching: !Boolean(channels),
      allChannels: channels?.channels,
      followedChannels: channels?.followedChannels,
    };
}
