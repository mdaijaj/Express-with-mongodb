// Initialize express router
let router = require('express').Router();

// Import contact controller
var contactController = require('/home/aijaj/Desktop/project/api with mongodb/controller.js');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;