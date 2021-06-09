const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const editRoutes = require('./edit-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/edit', editRoutes);

module.exports = router;
