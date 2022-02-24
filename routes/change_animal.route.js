const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('change_animal');
});


module.exports = router
