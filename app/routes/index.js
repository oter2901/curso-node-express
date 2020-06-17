const { Router } = require('express');
const PokemonsRouter = require('./pokemons');
const router = Router();

router.get('/health', (req, res) => {
  res.status(200).send(`${process.env.APP_ID} up and running`);
});
router.use('/pokemons', PokemonsRouter);

module.exports = router;
