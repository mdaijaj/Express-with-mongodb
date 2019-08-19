var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {type: String, require:true, unique:true},
    jobLocation: {type: String, require:true},
    company: {type: String, require:true},
    skill: {type: String, require:true},
    hometown: {type: String, require:true},
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}