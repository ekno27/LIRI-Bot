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

/**
 * Commands to carry out:
 */

//my-tweets: This will show your last 20 tweets and when they were created at in your terminal/bash window.
if(argument ==="my-tweets"){
    client.get("statuses/user_timeline", function(error,tweets,response){
        if(error) throw error;
        console.log(tweets[1].text);
        //if there's less than 20 tweets, show 'em all, else show only 20
        if(tweets.length<=20){
            for(var i = 0; i<tweets.length;i++){
                console.log("Tweet: "+  tweets[i].text);
                console.log("Creation date: "+ tweets[i].created_at+ "\n");
            }

        }
        else{
            for(var i = 0;i<20;i++){
                console.log("Tweet: "+  tweets[i].text);
                console.log("Creation date: "+ tweets[i].created_at+ "\n");
            }
        }
    })
    
}



