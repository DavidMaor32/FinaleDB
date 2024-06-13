const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const roleSchema = new Schema({
    roleName: { type: String, required: true, unique: true },
    permissions: { type: String, required: true }
});

const Role = model("Role", roleSchema);
module.exports = Role;