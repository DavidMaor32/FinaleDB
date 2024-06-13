const {createRole, getRoles, getRole, updateRole, deleteRole} = require('../services/roles');

module.exports = {
    createRole: async (req, res) => {
        const {roleName, permissions } = req.body;
        if(!roleName || !permissions) 
            return res.status(400).json({ message: "Role name and permissions are required" });
        try {
            const newRole = await createRole({roleName, permissions});
            res.status(201).json(newRole);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getRoles: async (req, res) => {
        try {
            const roles = await getRoles();
            res.status(200).json(roles.map(role => {role.roleName, role.permissions}));
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getRole: async (req, res) => {
        const roleName = req.params.roleName;
        try {
            const role = await getRole(roleName);
            res.status(200).json({role,_id,roleName:role.roleName, permissions:role.permissions});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateRole: async (req, res) => {
        const roleName = req.params.roleName;
        const role = req.body;
        try {
            const updatedRole = await updateRole(roleName, role);
            res.status(200).json(updatedRole);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteRole: async (req, res) => {
        const roleName = req.params.roleName;
        try {
            await deleteRole(roleName);
            res.status(200).json({ message: "Role deleted successfully" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

