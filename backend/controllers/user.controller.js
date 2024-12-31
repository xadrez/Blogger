import User from '../models/user.model.js'

export const getUsers = async (req,res)=>{
    const users = await User.find()
    res.status(200).json(users)
}

export const deleteUser = async (req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json("The was deleted")
}