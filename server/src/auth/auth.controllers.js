import UserModel from "../../users/User.model.js";

export const postRegister = async(req, res) => {
    const {username, email, password} = req.body;
    try {
        const user = await UserModel.create({
            username,
            email,
            password,
        });

        return res.status(200).json({success: true, user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Oops something went wrong"});
    }
}

export const postLogin = async(req, res) => {
    return res.send("This is login route");
}