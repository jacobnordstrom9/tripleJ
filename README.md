<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="## // link to website // ##">
    <img src="images/finding_streamo.png" alt="Logo" width="384px" height="216">
  </a>

  <!-- <h2 align="center"> finding streamo </span></h2> -->

  <p align="center">
    Tired of spending hours trying to find your movie on the countless of streaming services out there? Look no further than right here!
    <br />
    <br />
    <a href="## link to website ##">View Live</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)   
  * [Built With](#built-with)               
* [The Team](#the-team)
* [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
* [Stretch Goals](#stretch-goals)
* [Challenges and Solutions](#challenges-and-solutions)
* [Code Snippets](#code-snippets)
* [Screenshots](#screenshots)

<!-- ABOUT THE PROJECT -->
## About The Project

We have created a website that will allow the user to easily search for their favorite movies and quickly see on what streaming service the movie is available. The front page displays the current top 20 movies, with a description/photo/streaming service its available on of each movie. A button which will bring you to a top 10 movie of a specific genre. A useable search bar to search for a specific movie. If a movie is also being played in theaters, the user will be able to search for movie times in their area.

### Built With

<strong> Tech: </strong>
* HTML
* JavaScript
* CSS

<strong> APIs: </strong>

* [theMovieDB](https://themoviedb.org)
* [Fandango](https://developer.fandango.com)

## The Team

<strong> Jason Humphreys: https://github.com/SJasonHumphrey </strong> <br/>
<strong> Jim Chamberlin: https://github.com/jimcha924 </strong> <br/>
<strong> Anjunique Sampson: https://github.com/sampsonnene </strong> <br/>
<strong> Jacob Nordstrom: https://github.com/jacobnordstrom9 </strong> <br/>

## MVP (Minimum Viable Product):

* Searchable database for different movies and the streaming service they are located on.
* Clickable movie titles and display general information.

## Stretch Goals

* Link to the streaming service if you want to watch it. 
* Feature which allows you to save movies to your collection. 

## Challenges and Solutions: 

<strong> Challenge: </strong> The way the streaming services was nested inside data required a tedious amount of coding in order to extract the correct streaming service where the movie is located. <br/>
<strong> Solution: </strong> Using arrays and objects etc etc etc.

<strong> Challenge: </strong> Dynamic creation and dynamic classes. Divs within divs within divs.  <br/>
<strong> Solution: </strong> alksdjflkajsdlfkjaslkdfjakd asdlkfjalksdjf hksdjf habkjasdfasdnf nakdsfhaklsdjf nnd nsj flkjeieonc kslkdjf

<strong> Challenge: </strong> alksdjflkajsdlfkjaslkdfjakd asdlkfjalksdjf hksdjf habkjasdfasdnf nakdsfhaklsdjf nnd nsj flkjeieonc kslkdjf <br/>
<strong> Solution: </strong> alksdjflkajsdlfkjaslkdfjakd asdlkfjalksdjf hksdjf habkjasdfasdnf nakdsfhaklsdjf nnd nsj flkjeieonc kslkdjf

## Code Snippets

```sh
function showFullMediaContent(result) {
    console.log(result)


    // EXTRACT RESULTS & SET BACKUP IF FAILURE
    const tmdbId = result.id || '0';
    const title = result.title || result.name || 'Unknown';
    const tagline = result.tagline || `NO. SEASONS: ${result.number_of_seasons}  ~  NO. EPISODES: ${result.number_of_episodes}` || '';
    const overview = result.overview || '';
    const rating = result.vote_average || '0';
    let date = result.release_date || result.first_air_date || '';
    let status = result.status || '';
    let backdrop = `${BACKDROP}${result.backdrop_path}`;
    let poster = `${POSTER}${result.poster_path}`;
    let trailer = [];
    let linktext = '';
    let streamLink = '';
    let streamService = '';
    let runTime = result.runtime + ' Minutes';


    try {
        linktext = result['watch/providers'].results.US.flatrate[0].provider_name;
        streamLink = POSTER + result['watch/providers'].results.US.flatrate[0].logo_path;
        streamService = result.homepage; 
    } catch (error) {
        linktext = title;
        streamLink = 'images/vudu.png'
        streamService = 'https://www.vudu.com' 
    }


    // CHANGE DATE TO EUROPEAN FORMAT 
    // IF ARTWORK FAILS, SET THE DEFAULT ARTWORK
    if (date) date = date.split('-').reverse().join('-');
    if (result.backdrop_path == null) backdrop = DEFAULT_BACKDROP;
    if (result.poster_path == null) poster = DEFAULT_POSTER;
    

    // GET TRAILER & GET FOR UNDEFINED
    // RETURN NEW ARRAY AND FILTER BASED ON VIDEO TYPE
    if (result.videos.results.length != 0) {
        trailer = result.videos.results.map(video => {
            if (video.type == 'Trailer') {
                return `https://www.youtube.com/watch?v=${video.key}`;
            }
        }).filter(video => {
            if (video != 'undefined') {
                return video;
            }
        });
    }

    // IF NO TRAILERS EXIST - REDIRECT TO YOUTUBE WITH QUERY
    else {
        trailer[0] = `https://www.youtube.com/results?search_query=${title}`;
    }

    // CREATE HTML TO RETURN
    fullMediaContent.innerHTML = `
        <p class="content-title">MEDIA DETAILS
            <i class="material-icons close-media-content" onclick="resetFullMediaContent(); checkIfCollectionChanged(${tmdbId})">close</i>
        </p>

        <!-- MEDIA BACKDROP -->
        <div id="media-showcase" style="background-image: url('${backdrop}')">
            <a class="download-fanart" href="${backdrop}"target="_blank">DOWNLOAD WALLPAPER<br/>
                <i class="material-icons download-icon">cloud_download</i>
            </a>
            <h1 id="media-title">${title}</h1>
            <a href="${streamService}" class="streamService" target="_blank">
            <img width="8%" id="streamer" src="${streamLink}" alt="${linktext}">
            </a>
        </div>

        <!-- MEDIA DETAILS -->
        <div id="media-details">
            <img width="140" id="media-poster" src="${poster}" alt="${title}">
            <div id="media-details-bar">
                <a href="${trailer[0]}" target=_blank">Trailer</a>
                <span>${rating}</span><span>${status}</span><span>${date}</span><span>${runTime}</span>
                <span class="from-collection" onclick="updateList(${tmdbId},'#from-full-media-collection')">Add/Remove from Collection</span>

```

## Screenshots

<img src="images/finding_streamo.png" alt="Logo" width="384px" height="216">


