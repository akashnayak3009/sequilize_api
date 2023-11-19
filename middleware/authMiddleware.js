import User from "../api/users/usersModel.js";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';


export const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;


    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];

        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findByPk(decoded?.id);

                if (user) {
                    req.user = user;
                    next();
                } else {
                    return res.status(404).json({ status: false, message: "User not found" });
                }
            }
        } catch (error) {
            return res.status(401).json({ status: false, message: "Unauthorized, Please Login Again" });
        }
    } else {
        return res.status(400).json({ status: false, message: "No Token Provided" });
    }
});
