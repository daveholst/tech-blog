const router = require('express').Router();

// root route
router.get('/', async (req, res) => {
  res.render('test', {
    loggedIn: req.session.loggedIn,
    userID: req.session.userID,
    username: req.session.username,
    email: req.session.email,
  });
})

// login route
// router.get('/login', async (req, res) => {
//   res.render('login');
// })

module.exports = router;
