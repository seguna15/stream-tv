import { useEffect, useState } from "react"
import { getChannelSettings, updateChannelSettings } from "../../api";
import toast from "react-hot-toast";

export const useChannelSettings = () => {

    const [channelSettings, setChannelSettings] = useState(null);

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings();

        if(response.exception){
            return toast.error(
                response.exception?.response?.data.message || 'Error occurred when fetching channel settings'
            )
        }

        setChannelSettings({
          title: response.data.userData.title,
          description: response.data.userData.description,
          avatarUrl: response.data.userData.avatarUrl,
          username: response.data.userData.username,
          streamKey: response.data.userData.streamKey,
        });
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data);

        if (response.exception) {
          return toast.error(
            response.exception?.response?.data.message ||
              "Error occurred when saving channel settings"
          );
        }

        toast.success('Channel settings saved successfully')

    } 

    useEffect(() => {
        fetchChannelSettings()
    },[])

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveSettings,
    }
}
