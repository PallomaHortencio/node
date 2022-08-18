import express from "express";

const app = express();

// configurar a view engine com ejs
app.set('view engine', 'ejs');




// configurando rotas

// app.get('/', (req, res) => {
//     const bandas = ["One Direction", "Jonas Brothers", "Banda Deja Vú"]
//     res.render('paginas/index', {bandas});
// });

// app.get('/sobre', (req, res) => {
//     res.send('paginas/sobre');
// });

app.get('/', (req, res) => {
    const bandas = ["One Direction", "Jonas Brothers", "Banda Deja Vú"]
    res.render('paginas/index', {bandas});
});

app.get('/sobre', (req, res) => {
    res.render('paginas/sobre');
});

app.get('/contato', (req, res) => {
    res.render('paginas/contato');
});

// executando o servidor
app.listen(8080, () => {
    console.log('Servidor express rodando...');
});



// instalando nodemon -> atualiza o servidor automaticamente
// npm install -g nodemon


// preparar para receber arquivos html
// instalação do EJS - npm install ejs