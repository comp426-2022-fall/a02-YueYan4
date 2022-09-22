#!/usr/bin/env node

const minimist = require('minimist')

const args = minimist(process.args.slice(2))

if (args.h) {
  console.log('Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
    -h            Show this help message and exit.
    -n, -s        Latitude: N positive; S negative.
    -e, -w        Longitude: E positive; W negative.
    -z            Time zone: uses tz.guess() from moment-timezone by default.
    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
    -j            Echo pretty JSON from open-meteo API and exit.')
  exit 0.0
}

const moment = require('moment-timezone')

const timezone = moment.tz.guest()

const fetch = require('fetch')

var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lo + '&daily=precipitation_hours&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York&past_days=0'

// Make a request
const response = await fetch(url);


