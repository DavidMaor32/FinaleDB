const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const depSchema = new Schema({
    depName: { type: String, required: true, unique: true },
});

const Dep = model("Department", depSchema);
module.exports = Dep;