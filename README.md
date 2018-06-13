## Overview
Liri is a command line node app that takes in parameters and gives you back data. There are four commands:

#### 1. node liri.js my-tweets 
  * This will show your last 20 tweets and when they were created at in your terminal/bash window. If you have less than 20 tweets, it will show all of them
  * Your tweets will be retrieved using the twitter node modules 
#### 2. node liri.js spotify-this-song \<song name here>\
   * This will show the following information about the song in your terminal/bash window 
            * Artist(s)
            * The song's name
            * A preview link of the song from Spotify
            * The album that the song is from
    * node-spotify-api node module is used in order to retrieve song information from the spotify API.

#### 3. node liri.js movie-this \<movie name here>
   * This will output the following information to your terminal/bash window:
	- Title of the movie.
        - Year the movie came out.
        - IMDB Rating of the movie.
        - Rotten Tomatoes Rating of the movie.
        - Country where the movie was produced.
        - Language of the movie.
        - Plot of the movie.
        - Actors in the movie.
     
   * The request package is used to retrieve data from the OMDB API, similar to an ajax call

#### 4. node liri.js do-what-it-says
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
