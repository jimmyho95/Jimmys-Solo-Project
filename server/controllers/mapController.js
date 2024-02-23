const express = require('express')
// const db = require('../models/mapModels');
// const express = require("express")
const mapController = {};


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer OALPSFtDof2VqDHIOQL7n8g0XKnHh9f9W2sbf2SBt-30uKdOR9WCUWBrMu8ILFAMGWJXbIg8GebwoXRtSPeSbVdoIInr6B4RE4kUdZEM4s88mh5FLQzaHO4mdZbXZXYx");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


mapController.getRestaurants = async (req, res, next) => {
    // console.log('getRestaurants middleware hit')
    try {
         // const id = req.params.id;
        const response = await fetch("https://api.yelp.com/v3/businesses/search?location=NYC&sort_by=best_match&limit=20", requestOptions)
        const body = await response.json()
        res.locals.restaurants = body.businesses
        // console.log(res.locals.restaurants[0])
        return next()
    } catch (err) {
        return next({
            log: `Error in the getRestaurants function: ${err}`,
            status: 500,
            message: {
                err: 'mapController.getRestaurants: ERROR: Check server logs for details',
            },
        })
    }
}

module.exports = mapController;