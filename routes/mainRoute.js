const router = require('express').Router();
const Main = require('../views/Main.jsx');

router
  .get('/', (req, res) => {
    res.renderComponent(Main, { title: 'Главная страница' });
  });

module.exports = router;
