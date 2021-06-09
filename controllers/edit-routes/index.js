const router = require('express').Router();

const editPostRoutes = require('./edit-post');

router.use('/post', editPostRoutes);

module.exports = router;
