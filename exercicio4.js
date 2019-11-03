window.addEventListener("load", function(){
    document.querySelector("#btn").addEventListener("click",pesquisar);
    document.addEventListener("keydown", pesquisar)
});
function pesquisar(){
    var vp = document.querySelector("#pesq").value;
    var vc = document.querySelector("#cles").value;
    
    var div = document.getElementById("rel");
    div.innerHTML = "";
    for (var i=0; i< Biblioteca.length; i++){
        if (Biblioteca[i].Titulo == vp){
        div.innerHTML += "<table border='1'><tr><td> Titulo: "+Biblioteca[i].Titulo+"</td>"+
        "<td>Autor: "+Biblioteca[i].Autores.Autor+"</td><td> Edição: "+Biblioteca[i].Edicao+
        "</td><td> Ano de Publicação: "+Biblioteca[i]["ano-publicação"]+"</td><td> Editora: "
        +Biblioteca[i].editora+"</td><td> Local Publicação: "+Biblioteca[i]["Local de Publicação"]+"</td>"
        +"<td>Cliassificação: "+Biblioteca[i].Classificação+"</td>"+
        "<td> Código: " +Biblioteca[i].Codigo+"</td><td >Assunto: "+Biblioteca[i].Assunto+"</td></table>"
        }
        if (Biblioteca[i].Classificação == vc){
            div.innerHTML += "<table border='1'><tr><td> Titulo: "+Biblioteca[i].Titulo+"</td>"+
            "<td>Autor: "+Biblioteca[i].Autores.Autor+"</td><td> Edição: "+Biblioteca[i].Edicao+
            "</td><td> Ano de Publicação: "+Biblioteca[i]["ano-publicação"]+"</td><td> Editora: "
            +Biblioteca[i].editora+"</td><td> Local Publicação: "+Biblioteca[i]["Local de Publicação"]+"</td>"
            +"<td>Cliassificação: "+Biblioteca[i].Classificação+"</td>"+
            "<td> Código: " +Biblioteca[i].Codigo+"</td><td >Assunto: "+Biblioteca[i].Assunto+"</td></table>"
            }
    }
}

