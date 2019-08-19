// Import contact model
Contact = require('/home/aijaj/Desktop/project/api with mongodb/model.js');

// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        console.log(contacts)
        return res.send({
            status: "Successfully!",
            message: "Navgurukul Alumni Students who doing well Jobs in Good Companies. ",
            data: contacts
        });
    });
};


// Handle create contact actions
exports.new = function (req, res) {
    var contacts = new Contact();
// var contacts = req.body.name 
//     return contacts
    
    contacts.name = req.body.name
    contacts.jobLocation = req.body.jobLocation
    contacts.company = req.body.company
    contacts.skill = req.body.skill
    contacts.hometown = req.body.hometown

// save the contact and check for errors
    contacts.save(function (err) {
    if (err)
        console.log(err);
    res.send({
            message: 'New contact created!',
            data: contacts
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contacts) {
        if (err)
            res.send(err);
            console.log(contacts)
        res.json({
            message: 'Contact details loading..',
            data: contacts
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contacts) {
        if (err)
            res.send(err);
        else
        contacts.name = req.body.name
        contacts.jobLocation = req.body.jobLocation
        contacts.company = req.body.company
        contacts.skill = req.body.skill
        contacts.hometown = req.body.hometown
// save the contact and check for errors
        contacts.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contacts
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contacts) {
        if (err)
            res.send(err);
    res.json({
            status: "successfuly!",
            message: 'Contact deleted successfully..'
        });
    });
};