const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {
  res.status(200).send(`${req.query.id} up and running`);
});

module.exports = router;
