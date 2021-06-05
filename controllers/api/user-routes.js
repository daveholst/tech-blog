const router = require('express').Router();
const { User } = require('../../models');

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

module.exports = router;
