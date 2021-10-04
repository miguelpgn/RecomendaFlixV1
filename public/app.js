function adicionarFilme() {
    var campoFilmeFavorito = document.getElementById("filme").value;
    var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoFilmeFavorito;
    console.log(elementoListaFilmes);
    console.log(elementoFilmeFavorito);
}
function pesquisarFilme() {
    
}  