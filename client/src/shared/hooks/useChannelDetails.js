import toast from "react-hot-toast";
import { getChannelDetailsRequest } from "../../api";
import { useState } from "react";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState(null);

    const getChannelDetails = async(id) => {
        const response = await getChannelDetailsRequest(id);

        if(response.exception){
            return toast.error(
                 response.exception?.response?.data.message || "Error occurred when fetching channel details"
            )
        }

        setChannelDetails(response.data.channelDetails)
    }

    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails,
    }
}
