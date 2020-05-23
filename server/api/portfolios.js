const router = require('express').Router();
const { Portfolio } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const portfolios = await Portfolio.findAll();
    if (portfolios) res.json(portfolios);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const userPortfolio = await Portfolio.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    if (userPortfolio) res.send(userPortfolio);
    else res.status(404).send('404');
  } catch (err) {
    next(err);
  }
});
