const express = require('express');

const mapController = require('../controllers/mapController');

const router = express.Router();

router.get('/',
  mapController.getRestaurants,
  (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    // console.log('logging all characters: ', res.locals);
    return res.status(200).send(res.locals.restaurants);
  }
);


module.exports = router;