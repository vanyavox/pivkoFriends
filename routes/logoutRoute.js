const router = require('express').Router();

router.route('/').get((req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка удаления сессии' });
    }
    res.clearCookie('user_uid').redirect('/');
  });
});

module.exports = router;