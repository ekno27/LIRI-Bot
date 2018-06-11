//declaring the use of each node package

require("dotenv").config();
var Twitter = require("twitter");
var request = require("request");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");

//creating variables to access key information 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//accepting arguments
var argv = process.argv;
//obtains argument that will determine what liri will do
var argument = argv[2];
// console.log(argument);

//obtaining the query
var queryPrompt ="";
if(argv.length>3){
   
    for (var i = 3;i< argv.length;i++){
        queryPrompt += argv[i]+ " "; 
    }
    queryPrompt = queryPrompt.substring(0,queryPrompt.length-1);
    // console.log(queryPrompt);
}
execute(argument,queryPrompt);

function execute(argument, queryPrompt){
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
    else if (argument === "spotify-this-song"){
        if(queryPrompt===""){
        queryPrompt = "The Sign ace of bass"  
        }
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

/**
 * movie-this '<movie name here>'
 * This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
 */

 else if(argument ==="movie-this"){
     if(queryPrompt ===""){
         queryPrompt= "Mr. Nobody";
     }
     var queryURL = "http://www.omdbapi.com/?t="+queryPrompt +"&y=&plot=short&apikey=trilogy";
    // console.log(queryURL);
     request(queryURL, function(error, response, body) {
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

    console.log("Name of film: "+ JSON.parse(body).Title);
    console.log("Release date: "+ JSON.parse(body).Released);
    console.log("Rating: " + JSON.parse(body).imdbRating);
    console.log("Country of production: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
        }
    });

 }

 else if (argument ==="do-what-it-says"){
     
     fs.readFile("random.txt","utf8",function(error,data){
         if(error){
             return console.log(error);
         }
         console.log(data);
         var dataArr = data.split(",");
         argument = dataArr[0];
         queryPrompt = JSON.parse(dataArr[1]);
         execute(argument, queryPrompt); 

     });

 }
 else{
     console.log("Command cannot be recognized. List of available commands:");
     console.log(" my-tweets \n spotify-this-song \n movie-this \n do-what-it-says")
 }

}//end of function





