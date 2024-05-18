import UserModel from "../users/User.model.js";
import channelModel from "../channels/channel.model.js";
import { issueJwtToken } from "../utils/jwt.util.js";
import bcrypt from 'bcrypt';

export const postRegister = async(req, res) => {
    const {username, email, password} = req.body;
    try {
      const userExists = await UserModel.exists({ email: email.toLowerCase() });

      if (userExists) {
        return res
          .status(409)
          .json({ success: false, message: "Email already in use" });
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const newChannel = await channelModel.create({})

      const user = await UserModel.create({
        username,
        email: email.toLowerCase(),
        password: encryptedPassword,
        channel: newChannel._id,
      });

      // create JWT Token
      const token = issueJwtToken(user._id, user.email);

      return res.status(200).json({ success: true, userDetails: {email: user.email, username: user.username, token} });
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Oops something went wrong"});
    }
}

export const postLogin = async(req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({email});

      if(!user) return res
        .status(400)
        .json({ success: false, message: "Invalid credentials. Please try again" });

      const comparePassword = await bcrypt.compare(password, user.password);

      if(!comparePassword) return res
        .status(400)
        .json({
          success: false,
          message: "Invalid credentials. Please try again",
        });

      // create JWT 
      const token = issueJwtToken(user._id, user.email);

      // send response
      return res.status(200).json({success: true, userDetails: {email: user.email, username: user.username, token}})

    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Oops something went wrong" });
    }
}