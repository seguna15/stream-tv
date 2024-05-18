import channelModel from "../channels/channel.model.js";
import UserModel from "../users/User.model.js";
import bcrypt from 'bcrypt';



export const getChannelSettings = async (req, res) => {
    try {
        const {userId} = req.user;
        const userData = await UserModel.findById(userId, {
            channel: 1,
            username: 1,
        }).populate("channel")

        return res.status(200).json({success: true, userData: {
            id: userData.channel._id,
            username: userData.username,
            title: userData.channel.title,
            description: userData.channel.description,
            avatarUrl: userData.channel.avatarUrl,
            streamKey: userData.channel.streamKey,
        }})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Oops something went wrong"})
    }
}

export const putChannelSettings = async (req, res) => {
    try {
        const {userId} = req.user;

        const {title, description, username, avatarUrl} = req.body;

        const userData = await UserModel.findById(userId, {channel: 1, username: 1});

        if(userData.username !== username) {
            await UserModel.updateOne({_id: userId}, {username});
        }

        const channelData = await channelModel.findByIdAndUpdate(userData.channel, {
            title, description, avatarUrl, isActive: true,
        },{new: true})

        return res.status(200).json({
            success: true,
            userData: {
                channelId: channelData._id, username, title: channelData.title, description: channelData.description, avatarUrl: channelData.avatarUrl
            }
        })
    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Oops something went wrong" });
    }
}

export const patchPassword = async (req, res) => {
    try {
        const {userId} = req.user;

        const {password, newPassword} = req.body;

        const userData = await UserModel.findById(userId, {password: 1});

        const isPasswordCorrect = await bcrypt.compare(password, userData.password)

        if(!isPasswordCorrect) return res.status(400).json({success: false, message: "Invalid password. Please try again."})

        const encryptedPassword = await bcrypt.hash(newPassword, 10);

        await UserModel.updateOne({_id: userId}, {password: encryptedPassword});

        return res.status(200).json({success: true, message: "Password updated successfully."})
    } catch (error) {
         console.log(error);
         return res
           .status(500)
           .json({ success: false, message: "Oops something went wrong" });
    }
}