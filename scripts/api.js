
// TMDB URLS
const API_KEY = 'fd97d2144f719acfbc1b674ebc8649c3';
const MOVIES = 'https://api.themoviedb.org/3/movie/';
const TVSHOWS = 'https://api.themoviedb.org/3/tv/';
const SEARCH = 'https://api.themoviedb.org/3/search/multi';
const LANGUAGE = '&language=en-US';
const POSTER = 'https://image.tmdb.org/t/p/w200';
const BACKDROP = 'https://image.tmdb.org/t/p/w1280/';
const DEFAULT_BACKDROP = 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png';
const DEFAULT_POSTER = 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png';
let url;
let data;




    // FETCH MAIN DATABASE CONTENT


function fetchTMDbData(primary, secondary, page = 1) {

    // GET MEDIA TYPE
    if (primary == 'movies') url = MOVIES;
    else if (primary == 'tvshows') url = TVSHOWS;

    // MAKE REQUEST WITH HEADERS
    fetch(`${url}${secondary}${API_KEY}${LANGUAGE}&page=${+page}`, 
    {
        headers: new Headers ({ 'Accept': 'application/json'})
    })
    .then(response => {
        return response.text();
    })
    .then(text => {
        data = JSON.parse(text);
        showContentResults(data.results);
        pagination(primary, secondary, data.total_pages, page);
    })
    .catch(err => {
        console.log(err);
    });
};




    // FETCH FULL MEDIA CONTENT


function fetchMediaData(mediaType, tmdbId) {
    
    // GET MEDIA TYPE
    if (mediaType == 'movie') url = MOVIES;
    else url = TVSHOWS;

    // MAKE REQUEST WITH HEADERS
    fetch(`${url}${tmdbId}${API_KEY}${LANGUAGE}&append_to_response=videos`, 
    {
        headers: new Headers ({ 'Accept': 'application/json'})
    })
    .then(response => {
        return response.text();
    })
    .then(text => {
        data = JSON.parse(text);
        showFullMediaContent(data);
    })
    .catch(err => {
        console.log(err);
    });
};




    // FETCH SEARCH CONTENT


function getTMDbSearchData(searchQuery) {

    // MAKE REQUEST WITH HEADERS
    fetch(`${SEARCH}${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false&append_to_response=watch/providers`, 
    {
        headers: new Headers ({ 'Accept': 'application/json'})
    })
    .then(response => {
        return response.text();
    })
    .then(text => {
        data = JSON.parse(text);
        resetSearchResults();
        showSearchResults(data.results);
        console.log(data.results);
    })
    .catch(err => {
        console.log(err);
    });
};


