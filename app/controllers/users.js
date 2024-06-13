const {createUser, getUser, getUsers, updateUser, deleteUser} = require('../services/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    create: async (req, res) => {
        const {userName, fName, lName, password, email, role, dep} = req.body;
        if(!userName || !fName || !lName || !password || !email || !role || !dep) 
            return res.status(400).json({ message: "All fields are required" });
        try {
            const passHash = await bcrypt.hash(password, 10);
            const user = await createUser({userName, fName, lName, passHash, email, role, dep});
            res.status(201).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            const user = await getUser(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await getUsers(req.query.filter, req.query.paging, req.query.offset);
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const user = await updateUser(req.params.id, req.body);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await deleteUser(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    login: async (req, res) => {
        try {
            const user = await login(req.query.userName, req.query.password);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    search: async (req, res) => {
        try {
            const users = await search(req.query.filter, req.query.paging, req.query.offset);
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    login: async (req, res) => {
        const {userName, password} = req.body;
        if(!userName || !password) 
            return res.status(400).json({ message: "All fields are required" });
        try {
            const user = await getUser(userName);
            if(!user) 
                return res.status(404).json({ message: "User not found" });
            if(!await bcrypt.compareSync(password, user.passHash))
                return res.status(401).json({ message: "Invalid password" });
            const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
                expiresIn: '15m'
            });
            res.set('Authorization', token);
            res.status(200).send(user);
        }
        catch (error) {
            res.status(500).send(error.message);
        };
    }
};