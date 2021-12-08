const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    delete: deleteFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    }).sort({ departs: 'ascending' })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight)
        Ticket.find({ flight: flight._id }, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        });
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', { title: 'Add Flight', departsDate });
}

function create(req, res) {
    const flight = new Flight(req.body);
    //Mongoose land
    flight.save(function(err) {
        // one way to handle errors
        console.log(err);
        if (err) return res.redirect('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}


function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight) {
        if (err) return res.redirect('/flights');
        console.log(flight);
        res.redirect('/flights');
    });
};