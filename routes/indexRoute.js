const express = require('express');

const router = express.Router();

const generateConstantData = require('../middleware/generateConstantData');

const aleoGetController = require('../controllers/aleo-tour-of-turkiye/get');
const cryptistGetController = require('../controllers/cryptist/get');
const indexGetController = require('../controllers/index/get');
const modaGetController = require('../controllers/moda-palas/get');
const nymGetController = require('../controllers/nym-community-gathering/get');
const suiGetController = require('../controllers/sui-move-workshop/get');

const contactPostController = require('../controllers/contact/post');

router.get(
  '/',
    generateConstantData,
    indexGetController
);
router.get(
  '/aleo-tour-of-turkiye',
    generateConstantData,
    aleoGetController
);
router.get(
  '/cryptist',
    generateConstantData,
    cryptistGetController
);
router.get(
  '/moda-palas',
    generateConstantData,
    modaGetController
);
router.get(
  '/nym-community-gathering',
    generateConstantData,
    nymGetController
);
router.get(
  '/sui-move-workshop',
    generateConstantData,
    suiGetController
);

router.post(
  '/contact',
    contactPostController
);

module.exports = router;
