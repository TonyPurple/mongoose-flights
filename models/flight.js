const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        // required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
        // required: true
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        // required: true,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        // required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        // required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        // required: true,
        default: function() {
            return new Date().setFullYear(new Date().getFullYear() + 1)
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);