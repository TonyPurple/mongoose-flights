const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render('tickets/new', { title: 'Add Ticket', ticketId: req.params.id })
}

function create(req, res) {
    flightId = req.params.id;
    req.body.flight = flightId;
    let seat = req.body.seat;
    let price = req.body.price;
    let flight = req.params.id;
    let ticket = new Ticket({ seat, price, flight });
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${flightId}`);
    });
}