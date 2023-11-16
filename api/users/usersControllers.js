import User from "./usersModel.js"


export const getAllUsers = async(req,res)=>{
    try{
        const users = await User.findAll();
        res.json({message:"All are fetched"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Getting all users failed"})
    }
}