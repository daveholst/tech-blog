const router = require('express').Router();

router.get('/', async (req, res) => {
  res.json('Server up!')
})

module.exports = router;
