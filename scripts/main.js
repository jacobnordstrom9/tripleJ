var topMovies = [];
var services = [];
var movieTitles2 = [];
fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey1}`)
.then(result => result.json())
.then(data =>{
    localStorage.setItem('Top 20 Movies', JSON.stringify(data))
    var stored = JSON.parse(localStorage.getItem("Top 20 Movies"));
    topMovies.push(stored);
    for (var i = 0; i <  20; i++){
    var $body = document.querySelector('body');
    var div = document.createElement('div');
    var img = document.createElement('img')
    var p = document.createElement('p')
    div.innerHTML = `<b>${data.results[i].title}</b>`
    $body.append(div);
    div.appendChild(img);
    div.append(p);
    p.innerHTML = data.results[i].overview;
    img.src = `https://image.tmdb.org/t/p/w200/${data.results[i].poster_path}`;
    fetch(`https://api.watchmode.com/v1/search/?apiKey=${apiKey2}&search_field=name&search_value=${data.results[i].title}`)
    .then(result => result.json())
    .then(data2 =>{
    var movieTitle = data2.title_results[0].id;
    fetch(`https://api.watchmode.com/v1/title/${movieTitle}/sources/?apiKey=${apiKey2}`)
    .then(result => result.json())
    .then(data3 =>{
    localStorage.setItem('Services', JSON.stringify(data3))
    var stored3 = JSON.parse(localStorage.getItem("Services"));
    services.push(stored3);

    })
    })
}
console.log(services);
console.log(topMovies);


}) 
