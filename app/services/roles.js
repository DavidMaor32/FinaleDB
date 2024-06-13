const Role = require("../models/roles");

module.exports = {
    createRole: async (role) => {
        return await Role.create(role);
    },
    getRole: async (roleName) => {
        return await Role.findOne({
            roleName: roleName
        });
    },
    getRoles: async () => {
        return await Role.find();
    },
    deleteRole: async (roleName) => {
        return await Role.deleteOne({
            roleName: roleName
        });
    },
    updateRole: async (roleName, role) => {
        return await Role.updateOne({
            roleName: roleName
        }, role);
    },
    isEmpty: async () => {
        return await Role.find().limit(1).count() === 0;
    }
};