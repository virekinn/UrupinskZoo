const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('admin');
});


module.exports = router
