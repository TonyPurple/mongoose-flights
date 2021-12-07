const Flight = require('../models/flight');

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight.id}`);
        })
    })
}

function deleteDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight, destinations) {
        console.log(destinations)
        const idx = flight.destinations.findIndex(destinations => destinations._id == req.params.destinationsid)
        flight.destinations.splice(idx, 1)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`, { destinations })
        })
    })
};

module.exports = {
    create,
    delete: deleteDestination
}