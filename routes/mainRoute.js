const router = require('express').Router();
const Main = require('../views/Main.jsx');
const { User, Pivo } = require('../db/models');

router
  .get('/', async (req, res) => {
    let user;
    let name;
    if (req.session.user_id) {
      user = await User.findOne({ where: req.session.user_id });
      name = user.login;
      const pivko = await Pivo.findAll({ raw: true });
      // console.log(pivko);
      const curUser = req.session.user_id;
      // console.log(curUser);
      res.renderComponent(Main, {
        title: 'Главная', name, curUser, pivko,
      });
    }
    res.renderComponent(Main, { title: 'Главная', name });
  })
  .put('/:id', async (req, res) => {
    const { title, desc } = req.body;
    const { id } = req.params;
    try {
      const pivo = await Pivo.findOne({ where: { id } });
      // Проверочка
      if (req.session.user_id === pivo.userId) {
        const answ = await Pivo.update({ title, desc }, { where: { id } });

        if (answ[0]) {
          return res.json({ message: 'updated' });
        }
        return res.json({ message: 'Ne srabotalo' });
      }
    } catch (e) {
      res.json({ message: e.message });
    }
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const pivo = await Pivo.findOne({ where: { id } });
      // Проверочка
      if (req.session.user_id === pivo.userId) {
        const anws = await Pivo.destroy({ where: { id: Number(id) } });
        if (anws) {
          return res.status(202).json({ message: true });
        }
        return res.json({ message: false });
      }
    } catch (e) {
      res.json({ message: false });
    }
  });

module.exports = router;
