import User from '../models/UserModel.js';

//function get table user
export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//function get details table user
export const getUsersById = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//function create data table user
export const createUser = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({
            msg: 'User Create'
        });
    } catch (error) {
        console.log(error.message);
    }
}

//function update data table user
export const updateUser = async(req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: 'User Updated'
        });
    } catch (error) {
        console.log(error.message);
    }
}

//function delete data table user
export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: 'User Deleted'
        });
    } catch (error) {
        console.log(error.message);
    }
}