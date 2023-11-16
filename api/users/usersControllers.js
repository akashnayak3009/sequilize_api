import User from "./usersModel.js";

export const createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
        const newUser = await User.create({ firstName, lastName, email });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ status: 1, message: "All are fetched" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: "Getting all users failed" });
    }
};

export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", user });
        }
        return res.status(200).json({ status: 1, message: "All are fetched" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: "Getting user failed" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.update(req.body, { new: true });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.destroy();
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
