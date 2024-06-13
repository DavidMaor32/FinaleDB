const {createDep, getDeps, getDep, updateDep, deleteDep} = require('../services/dep');

module.exports = {
    createDep: async (req, res) => {
        try{
            const {depName} = req.body;
            const dep = await createDep(depName);
            res.status(201).json(dep);
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    },
    getDeps: async (req, res) => {
        try{
            const deps = await getDeps();
            res.status(200).json(deps.map(dep => dep.depName));

        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    },
    getDep: async (req, res) => {
        try {
            const {depName} = req.params;
            const dep = await getDep(depName.toUpperCase());
            res.status(200).json(dep);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    },
    deleteDep: async (req, res) => {
        try {
            const {depName} = req.params;
            await deleteDep(depName);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    },
    updateDep: async (req, res) => {
        try{
            const {depName} = req.params;
            const {newName} = req.body;
            console.log('here',depName, newName);
            await updateDep(depName.toUpperCase(), newName);
            res.status(204).send();
        }
        catch(err){
            console.error(err);
            res.status(400).json({message: err.message});
        }
    }
};