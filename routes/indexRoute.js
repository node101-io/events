const express = require('express');

const router = express.Router();

const generateConstantData = require('../middleware/generateConstantData');

const aleoGetController = require('../controllers/aleo_tour_of_turkiye/get');
const cryptistGetController = require('../controllers/cryptist/get');
const indexGetController = require('../controllers/index/get');
const modaGetController = require('../controllers/moda_palas/get');
const nymGetController = require('../controllers/nym_community_gathering/get');
const suiGetController = require('../controllers/sui_move_workshop/get');

router.get(
  '/',
    generateConstantData,
    indexGetController
);
router.get(
  '/aleo_tour_of_turkiye',
    generateConstantData,
    aleoGetController
);
router.get(
  '/cryptist',
    generateConstantData,
    cryptistGetController
);
router.get(
  '/moda_palas',
    generateConstantData,
    modaGetController
);
router.get(
  '/nym_community_gathering',
    generateConstantData,
    nymGetController
);
router.get(
  '/sui_move_workshop',
    generateConstantData,
    suiGetController
);

module.exports = router;
