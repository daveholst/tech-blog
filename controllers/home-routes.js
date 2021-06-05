const router = require('express').Router();

// root route
router.get('/', async (req, res) => {
  res.render('test');
})

// login route
// router.get('/login', async (req, res) => {
//   res.render('login');
// })

module.exports = router;
