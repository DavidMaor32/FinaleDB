const UserModel = require('../models/users');

module.exports = {
    createUser: async (user) => {
        return await UserModel.create(user);
    },
    getUser: async (userName) => {
        return await UserModel.findOne({ userName: userName });
    },
    getUsers: async (filter, paging, offset) => {
        return await UserModel.find(filter).skip(offset).limit(paging);
    },
    deleteUser: async (userName) => {
        return await UserModel.deleteOne({ userName: userName });
    },
    updateUser: async (userName, user) => {
        return await UserModel.updateOne({ userName: userName }, user);
    },
    isEmpty: async () => {
        return await UserModel.find().limit(1).count() === 0;
    }
};