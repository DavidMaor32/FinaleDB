const Dep = require('../models/dep');

module.exports = {
    createDep: async (newDepName) => {
        return await Dep.create({depName:newDepName.toUpperCase()});
    },
    getDep: async (depName) => {
        return await Dep.findOne({
            depName: depName
        });
    },
    getDeps: async() => {
        return await Dep.find();
    },
    deleteDep: async (depName) => {
        return await Dep.deleteOne({
            depName: depName
        });
    },
    updateDep: async (depName, newName) => {
        const newUpper = new String(newName).toUpperCase();
        console.log(newName,newUpper);
        return await Dep.updateOne({
            depName: depName
        }, {
            depName: newUpper,
        });
    },
    isEmpty: async () => {
        return await Dep.find().limit(1).count() === 0;
    }
};