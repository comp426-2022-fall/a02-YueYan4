#!/usr/bin/env node

import minimist from 'minimist'

//const minimist = require('minimist')

if (process.argv.length == 0) {
 
   console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE")
  console.log("    -h            Show this help message and exit.")
  console.log("    -n, -s        Latitude: N positive; S negative.")
  console.log("    -e, -w        Longitude: E positive; W negative.")
  console.log("    -z            Time zone: uses tz.guess() from moment-timezone by default.")
  console.log("    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.")
  console.log("    -j            Echo pretty JSON from open-meteo API and exit.")
 process.exit()
}
const args = minimist(process.argv.slice(2))

if (args.h) {
   console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE")
  console.log("    -h            Show this help message and exit.")
  console.log("    -n, -s        Latitude: N positive; S negative.")
  console.log("    -e, -w        Longitude: E positive; W negative.")
  console.log("    -z            Time zone: uses tz.guess() from moment-timezone by default.")
  console.log("    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.")
  console.log("    -j            Echo pretty JSON from open-meteo API and exit.")
  process.exit()
}

console.log(args)
//const moment = require('moment-timezone')

import moment from 'moment'
import 'moment-timezone'

//const timezone = moment.tz.guest()

import fetch from 'node-fetch'

//const fetch = require('fetch')

const lat = 0;

if (args.n) {
 lat = args.n
}

if (args.s) {
  lat = args.s
  lat = lat * -1
}
const lo = 0

if (args.e){
 lo = args.e
}

if (args.w) {
  lo = args.w
  lo = lo * -1
}

const tz = args.z

const days = 1
var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lo + '&daily=precipitation_hours&current_weather=true&temperature_unit=fahrenheit&timezone=' + tz + '&past_days=0'

// Make a request
const response = await fetch(url);


