import fetch from 'node-fetch';

const url = "https://jsonplaceholder.typicode.com/posts";
//const url = "https://viacep.com.br/ws/03662050/json/";

// Conectando com o endpoint da API (url)
fetch(url)
// retornando a resposta com o JSON
.then(resposta => resposta.json())

// exibindo a resposta (obtida na API) no console
.then(dados => console.log(dados));