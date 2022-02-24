const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('change_animals');
});


module.exports = router
