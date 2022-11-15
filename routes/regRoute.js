const router = require('express').Router();
const bcrypt = require('bcrypt');
const Reg = require('../views/Reg.jsx');
const { User } = require('../db/models');

router
  .get('/', (req, res) => {
    res.renderComponent(Reg, { title: 'Регистрация' });
  })
  .post('/', async (req, res) => {
    const {
      login, email, password1, passwordRepeat,
    } = req.body;
    let user;
    try {
      if (!login || !email || !password1 || !passwordRepeat) {
        return res.status(400).json({ message: 'Необходимо заполнить все поля', status: false });
      }
      if (password1 !== passwordRepeat) {
        return res
          .status(400)
          .json({ message: 'Пароли не совпадают :(', status: false });
      }
      user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(400).json({ message: 'Пользователь с таким e-mail уже зарегистрирован!', status: false });
      }

      const password = await bcrypt.hash(password1, 10);
      const newUser = await User.create({
        login, email, password,
      });

      req.session.user_id = newUser.id;
      res.status(201).json({ message: 'success', status: true });
    } catch (e) {
      res.json({ message: e.message });
    }
  });

module.exports = router;
