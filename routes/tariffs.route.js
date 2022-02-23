const router = require('express').Router()
const {Tariff} = require('../db/models')

router.get('/', async (req, res) => {
  const tariffs = await Tariff.findOne({ raw: true })

  res.render('tariffs', { 
    adults_weekdays: tariffs.adults_weekdays,
    children_weekdays: tariffs.children_weekdays,
    adults_weekend: tariffs.adults_weekend,
    children_weekend: tariffs.children_weekend, 
  })
})

router.get('/change', async (req, res) => {
  const tariffs = await Tariff.findOne({ raw: true })

  res.render('change_tariffs', { 
    adults_weekdays: tariffs.adults_weekdays,
    children_weekdays: tariffs.children_weekdays,
    adults_weekend: tariffs.adults_weekend,
    children_weekend: tariffs.children_weekend, 
  })
})

router.post('/change', async (req, res) => {
  const changedTariffs = req.body
  res.render('tariffs', changedTariffs)
})

module.exports = router;
