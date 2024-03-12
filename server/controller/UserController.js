import User from "../models/UserModel.js";

// get all data
export const getUsers = async(req, res) => {
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

// get single data by id
export const getUserById = async(req, res) => {
    try{
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

// create data
export const createUser = async(req, res) => {
    try{
        await User.create(req.body);
        res.status(201).json({msg: "User created!"});
    } catch (error) {
        console.log(error.message);
    }
};

// update data
export const updateUser = async(req, res) => {
    try{
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User updated!"});
    } catch (error) {
        console.log(error.message);
    }
};

// delete data
export const deleteUser = async(req, res) => {
    try{
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User deleted!"});
    } catch (error) {
        console.log(error.message);
    }
};