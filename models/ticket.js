let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ticketSchema = new Schema({
    seat: {
        type: String,
        // required: true,
        // unique: true,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
        // required: true
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Ticket', ticketSchema);