import jwt from "jsonwebtoken";

export const issueJwtToken = (id, email) => {
    return jwt.sign(
        //jwt payload
        {
            userId: id,
            email: email,
        },
        //secret
        process.env.TOKEN_SECRET,
        //additional config
        {
            expiresIn: "8h"
        }
    )
}