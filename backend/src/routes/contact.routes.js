const express = require('express');
const router = express.Router();

const customHeaders = require('../middlewares/customHeaders.middleware');
const rateLimit = require('../middlewares/rateLimit.middleware');
const { createContact } = require('../controllers/contact.controller');

router.post('/', rateLimit, customHeaders, createContact);

module.exports = router;
