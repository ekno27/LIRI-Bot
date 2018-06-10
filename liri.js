//declaring the use of each node package

require("dotenv").config();
var Twitter = require("twitter");
var request = require("request")
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

//creating variables to access key information 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//accepting arguments
var argv = process.argv;
//obtains argument that will determine what liri will do
var argument = argv[2];
console.log(argument);
//my-tweets: This will show your last 20 tweets and when they were created 
// at in your terminal/bash window.


/**movie-this: '<movie name here>'
 * 
 */
