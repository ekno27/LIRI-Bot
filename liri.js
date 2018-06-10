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

//obtaining the query 
var queryPrompt ="";
for (var i = 3;i< argv.length;i++){
    queryPrompt += argv[i]+ " "; 
}
queryPrompt = queryPrompt.substring(0,queryPrompt.length-1);
console.log(queryPrompt);
//my-tweets: This will show your last 20 tweets and when they were created 
// at in your terminal/bash window.

//2. node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
if (argument = "spotify-this-song"){
    spotify
    .search({ type: 'track', query: queryPrompt })
    .then(function(response) {
      console.log(response.tracks.items[1].artists);
      var artists="";
      
    })
    .catch(function(err) {
      console.log(err);
    });
}

