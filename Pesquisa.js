const mostraFilmes = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem ('db_filmes', data.target.response)

    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++) {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
            <div class="card text-center">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="FilmesDestaque">
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <a href="Detalhes.html?id=${filme.id}" class="btn btn-primary">Detalhes</a>
                </div>
            </div>
        `
    }
    document.getElementById('divListaDestaques').innerHTML = dadosHTML
}

const mostraErro = (data) => {
    alert('Deu erro na requisição');
}


const searchMovieApi = (movie) => {
  console.log(movie)
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/search/movie?api_key=b4d6c0fc4df8a3e08ef9566670840797&language=pt-BR&query=" + movie;
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open('GET', url, true);
    xhr.send();  
}


const init = () => {
    const movie = window.location.href.split("=")[1]

    if (movie) {
      searchMovieApi(movie)
      return
    }  
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=b4d6c0fc4df8a3e08ef9566670840797&language=pt-BR"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open('GET', url, true);
    xhr.send();

}

document.body.onload = init