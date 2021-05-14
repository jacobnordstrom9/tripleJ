// var apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=fd97d2144f719acfbc1b674ebc8649c3&query=Avengers';
var apiUrl = 'https://api.themoviedb.org/3/search/movie';
var apiKey = '?api_key=fd97d2144f719acfbc1b674ebc8649c3';
var apiQuery = '&query=';
var movieResultsContainer = document.getElementById("movieResults");

function submitSearch(){
    // when i click this button, the function needs to read what is in the search box and be able to pull that movie from the API.
    let movieSearch = document.getElementById("movieSearch").value;
    // console.log("movieSearch", movieSearch)
    var formattedEncoding = encodeURIComponent(movieSearch)
    var actualFetchUrl = apiUrl+apiKey+apiQuery+formattedEncoding
    fetch(actualFetchUrl)
        .then(response => response.json())
        .then(response => {
            console.log("response returned from API: ", response)
            console.log('loop begins');
            response.results.forEach((movie, index) => {
                // create a div element
                let divElement = document.createElement("div")
                divElement.className = "card"
                console.log("divElement1", divElement)
                // create the output to add to the inside of the divElement
                var imgSrc = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                console.log('imgSrc', imgSrc);
                var content = `
                    <h3 class="card-title"> ${movie.title} </h3>
                    <img class="card-image" src="${imgSrc}" />
                    <p class="card-overview"> ${movie.overview} </p>

                `;
                divElement.innerHTML = content
                // add the new divElement (append) to the movieResultsContainer
                movieResultsContainer.append(divElement)
                // console.log('--- each loop --')
                // console.log("index", index)
            })
        })
}

