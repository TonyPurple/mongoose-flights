const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    }).sort({ departs: 'ascending' })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { title: 'Flight Details', flight });
    })
}

function newFlight(req, res) {
    // const newFlight = new Flight();
    // const dt = newFlight.departs;
    // const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    const flight = new Flight(req.body);
    //Mongoose land
    flight.save(function(err) {
        // one way to handle errors
        console.log(err);
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights/');
    });
}