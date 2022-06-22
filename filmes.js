const dadosFilmes = {
    "results": [
        {
            "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
            "id": 338953,
            "original_language": "en",
            "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
            "overview": "O professor Alvo Dumbledore sabe que o poderoso mago das trevas Gellert Grindelwald está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?",
            "popularity": 4188.23,
            "poster_path": "/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg",
            "release_date": "2022-04-06",
            "title": "Animais Fantásticos: Os Segredos de Dumbledore",
            "vote_average": 6.9
        },
        {
            "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
            "id": 675353,
            "original_language": "en",
            "original_title": "Sonic the Hedgehog 2",
            "overview": "Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.",
            "popularity": 3669.412,
            "poster_path": "/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg",
            "release_date": "2022-03-30",
            "title": "Sonic 2: O Filme",
            "vote_average": 7.7
        },
        {
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "Uma romancista reclusa acredita que nada seria pior que fazer a turnê do seu livro mais recente com o modelo que ilustra a capa. Tudo muda quando a autora e o modelo sofrem uma tentativa de sequestro, e, com isso, são levados para uma surpreendente aventura na selva.",
            "popularity": 3279.951,
            "poster_path": "/vsX9gj7t56ZlMYKNYccskeW5adT.jpg",
            "release_date": "2022-03-24",
            "title": "Cidade Perdida",
            "vote_average": 6.8
        },
        {
            "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
            "original_language": "en",
            "original_title": "Memory",
            "overview": "Em Assassino Sem Rastro, Alex Lewis é um assassino experiente com reputação de precisão discreta. Preso em um dilema moral, Alex se recusa a concluir um trabalho que viola seu código de ética e deve rapidamente caçar e matar as pessoas que o contrataram antes que eles e o agente do FBI Vincent Serra o encontrem primeiro. Alex tinha o objetivo de se vingar, mas, com uma memória que começa a vacilar, ele é forçado a questionar todas as suas ações, se perdendo na linha entre o certo e o errado.",
            "popularity": 2947.864,
            "poster_path": "/uEPJQY1kEEz9XoZZ8rP6p9JUrmv.jpg",
            "release_date": "2022-04-28",
            "title": "Assassino Sem Rastro",
            "vote_average": 7.3
        }
    ]
}

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


const init = () => {

    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=b4d6c0fc4df8a3e08ef9566670840797&language=pt-BR"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open('GET', url, true);
    xhr.send();

}

document.body.onload = init