const router = require('express').Router();
const Login = require('../views/Login.jsx');

router
  .get('/', (req, res) => {
    res.renderComponent(Login, { title: 'Вход в систему' });
  });

module.exports = router;
