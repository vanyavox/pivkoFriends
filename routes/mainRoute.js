const router = require('express').Router();
const Main = require('../views/Main.jsx');
const { User } = require('../db/models');

router
  .get('/', async (req, res) => {
    let user; let
      name;
    if (req.session.user_id) {
      user = await User.findOne({ where: req.session.user_id });
      name = user.login;
      res.renderComponent(Main, { title: 'Главная', name });
    }
    res.renderComponent(Main, { title: 'Главная', name });
  });

module.exports = router;
