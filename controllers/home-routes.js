const router = require('express').Router();

// root route
router.get('/', async (req, res) => {
  res.render('test');
})

module.exports = router;
