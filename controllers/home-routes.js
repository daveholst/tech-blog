const router = require('express').Router();
const {Post, User} = require ('../models')

// root route
router.get('/', async (req, res) => {
  // get all posts
  const dbPostData = await Post.findAll({
    include: [
      {
        model: User,
      }
    ],
    order: [
      ['created_at', 'DESC']
    ]
  })

  const allPosts = dbPostData.map((post) => post.get({ plain: true }));

  res.render('posts', {allPosts})
  console.log(allPosts);

  // res.render('test', {
  //   loggedIn: req.session.loggedIn,
  //   userID: req.session.userID,
  //   username: req.session.username,
  //   email: req.session.email,
  // });
})
router.get('/post', (req,res) => res.render('newpost'))


// login route
// router.get('/login', async (req, res) => {
//   res.render('login');
// })

module.exports = router;
