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
if(argv.length>3){
   
    for (var i = 3;i< argv.length;i++){
        queryPrompt += argv[i]+ " "; 
    }
    queryPrompt = queryPrompt.substring(0,queryPrompt.length-1);
    console.log(queryPrompt);
}

<<<<<<< HEAD
/**movie-this: '<movie name here>'
 * 
 */
=======


/**
 * Commands to carry out:
 */

//my-tweets: This will show your last 20 tweets and when they were created at in your terminal/bash window.
if(argument ==="my-tweets"){
 
    client.get("statuses/user_timeline", function(error,tweets,response){
        if(error) throw error;
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


/**
node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
 */
if (argument === "spotify-this-song"){
    if(queryPrompt===""){
     queryPrompt = "The Sign ace of bass"  
    }
   console.log(queryPrompt);
    spotify
    .search({ type: 'track', query: queryPrompt, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       //full object
    //   console.log(data.tracks.items[0]);

      console.log("Artist: " + data.tracks.items[0].artists[0].name);

      console.log("Track: "+ data.tracks.items[0].name); 

      console.log("Album: " + data.tracks.items[0].album.name);

      console.log("Preview link: "+  data.tracks.items[0].external_urls.spotify);
      });
    
}

>>>>>>> 61ae0985904977b70e5731dfc63731220f24a546
