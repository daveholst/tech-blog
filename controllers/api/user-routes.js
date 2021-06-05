const router = require('express').Router();
const { User } = require('../../models');

// create a user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.email = dbUserData.email;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// log a user out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
// login a user
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
       username: req.body.username,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.email = dbUserData.email;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
