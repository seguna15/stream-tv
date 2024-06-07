import axios from "axios";

export const  liveStreamArray = async () => {

    const requestData = await axios.get("http://localhost:8000/api/streams")
    const activeStreams = requestData.data;

    let liveStreams = []
    for (const streamId in activeStreams?.live){
        if(activeStreams.live[streamId].publisher && activeStreams.live[streamId].publisher !== null){
            liveStreams.push(streamId)
        }
    }

    return liveStreams;
        
}