import UserModel from "../users/User.model.js";
import channelModel from "./channel.model.js";


export const getChannelDetails  = async (req, res) => {
   try {
        const {channelId} = req.params;

        const channel = await channelModel.findById(channelId);

        if(!channel || !channel.isActive) return res.status(404).send('Oops channel not found');

        const user = await UserModel.findOne({channel: channelId}, {username: 1});

        const streamUrl = 'http';
        const isOnline = false;

        return res.status(200).json({success: true, channelDetails: {
            id: channel._id,
            title: channel.title,
            description: channel.description,
            username: user.username,
            isOnline,
            streamUrl,
        }})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Oops something went wrong"});
    }
};

//You can replace request with _ if you're not handling anything from the request object
export const getChannels = async (_, res) => {
    try {
        const users = await UserModel.find({}, {
            channel: 1,
            username: 1,
        }).populate("channel")
        const channels = users.filter(user  => user.channel.isActive).map(user => {
            return {
                id: user.channel._id,
                title: user.channel.title,
                avatarUrl: user.channel.avatarUrl,
                username: user.username,
                isOnline: user.channel.isActive,
            }
        })

        return res.status(200).json({channels});
    } catch (error) {
         console.log(error);
         return res
           .status(500)
           .json({ success: false, message: "Oops something went wrong" });
    }
}

export const getFollowedChannels = async (req, res) => {
    try {
        const {userId} = req.user;
        const { followedChannels } = await UserModel.findById(userId, {
          followedChannels: 1,
        });
        
        return res.status(200).json({ success: true, followedChannels });
    } catch (error) {
         console.log(error);
         return res
           .status(500)
           .json({ success: false, message: "Oops something went wrong" });
    }
}

export const postFollowChannel = async (req, res) => {
    try {
        const {userId} = req.user;

        const {channelId} = req.body;

        const userData = await UserModel.findById(userId, {followedChannels: 1});

        if(userData.followedChannels.includes(channelId)) return res.status(409).json({success: false, message: "You are already following this channel."});

        userData.followedChannels.push(channelId);

        await userData.save();

        return res.status(200).json({success: true, message: "Channel followed"});
    } catch (error) {
         console.log(error);
         return res
           .status(500)
           .json({ success: false, message: "Oops something went wrong" });
    }
}