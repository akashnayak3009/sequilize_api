import User from "./usersModel.js";
import asyncHandler from 'express-async-handler'

export const createUser = asyncHandler(async (req, res) => {

    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: true,
            message: "User has been created",
            user: newUser
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: "User Not created",
            error: err.message
        });
    }
});

export const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }
        if (!user || !user.isPasswordMatched(password)) {
            return res.status(401).json({ status: false, message: 'Incorrect email or password' });
        }
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
            },
            token: generateToken(user.id),
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}
)

export const getAllUsers = asyncHandler(async (req, res) => {
    try {
        // const users = await User.findAll({
        //     where: {
        //         status: true,
        //     },
        // });
        const users = await User.findAll();

        res.status(200).json({
            status: true,
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        console.error('Users not fetched', error);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message,
        });
    }
})


export const getUserById = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", user });
        }
        return res.status(200).json({ status: true, message: "All are fetched" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Getting user failed" });
    }
});

export const updateUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const [rowsUpdated] = await User.update(
                req.body,
                {
                    where: {
                        id,
                    },
                },
                {
                    new: true,
                }
            );
            if (rowsUpdated > 0) {
                res.status(200).json({
                    status: true,
                    message: "User has been updated successfully",
                });
            } else {
                res.status(404).json({
                    status: false,
                    message: "User not found",
                });
            }
        } catch (error) {
            console.error("User updation failed", error);
            res.status(500).json({
                status: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }
)

export const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const rowsDeleted = await User.destroy({
            where: {
                id,
            },
        });
        if (rowsDeleted > 0) {
            res.status(200).json({
                status: true,
                message: "User has been deleted successfully",
            });
        } else {
            res.status(404).json({
                status: false,
                message: "User not found",
            });
        }
    } catch (error) {
        console.error("User deletion failed", error);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message,
        });
    }
})
