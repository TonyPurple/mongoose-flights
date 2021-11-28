const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', { departsDate });
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