const router = require('express').Router();
const Profile = require('../views/Profile.jsx');
const { User } = require('../db/models');

router
  .get('/', async (req, res) => {
    let user;
    let name, createdAt;
    const curUser = req.session.user_id;
    if (req.session.user_id) {
      user = await User.findOne({ where: req.session.user_id });
      name = user.login;
      res.renderComponent(Profile, {
        title: 'Профиль', name, curUser,
      });
    }
    res.renderComponent(Profile, {
      title: 'Профиль', name, curUser,
    });
  });

module.exports = router;
