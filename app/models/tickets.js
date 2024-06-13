const mongoose = require('mongoose');
const {Schema, model } = mongoose;

const ticketSchema = new Schema({
    tid:        {   type: Uuid  },
    title:      {   type: String, required: true  },
    description:{   type: String, required: true  },
    notes:      {   type: String, required: false },
    

});

const Ticket = model("Ticket", ticketSchema);
module.exports = Ticket;