const router = require('express').Router();
const Reg = require('../views/Reg.jsx');

router
  .get('/', (req, res) => {
    res.renderComponent(Reg, { title: 'Регистрация' });
  });

module.exports = router;
