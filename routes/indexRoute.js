const express = require('express');

const router = express.Router();

const aleoGetController = require('../controllers/aleo_tour_of_turkiye/get');
const cryptistGetController = require('../controllers/cryptist/get');
const indexGetController = require('../controllers/index/get');
const modaGetController = require('../controllers/moda_palas/get');
const nymGetController = require('../controllers/nym_community_gathering/get');
const suiGetController = require('../controllers/sui_move_workshop/get');

router.get(
  '/',
    indexGetController
);
router.get(
  '/aleo_tour_of_turkiye',
    aleoGetController
);
router.get(
  '/cryptist',
    cryptistGetController
);
router.get(
  '/moda_palas',
    modaGetController
);
router.get(
  '/nym_community_gathering',
    nymGetController
);
router.get(
  '/sui_move_workshop',
    suiGetController
);

module.exports = router;
