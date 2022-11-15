const router = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login.jsx');
const { User } = require('../db/models');

router
  .get('/', (req, res) => {
    res.renderComponent(Login, { title: 'Вход в систему' });
  })
  .post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
      const logUser = await User.findOne({ where: { email } });
      const validPassword = await bcrypt.compare(password, logUser.password);
      if (logUser) {
        if (validPassword) {
          req.session.user_id = logUser.id;
          return res.json({ status: 'succes', url: '/' });
        }
        return res
          .status(400)
          .json({ message: 'Необходимо протрезветь, неверный пароль 🤢', status: false });
      }
      return res.status(404).json({ status: 'error', message: 'Неправильный адрес электронной почты' });
    } catch (error) {
      console.log(error.message);
    }
  });

module.exports = router;
