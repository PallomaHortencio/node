import express from "express";
const app = express();

/* Configurando a views (motor de visualização com EJS) */
app.set('view engine', 'ejs');


/* configurando as rotas */
app.get('/', (req, res) => {
    //res.send('aaaaaaaaaaa')
    let bandas = ['aaa', 'bbb', 'ccc'];
    res.render('index', {bandas});
})

app.get('/sobre', (req, res) => {
    res.render('sobre');
})

app.get('/contato', (req, res) => {
    res.render('contato');
})


/* configurando o servidor */
app.listen(8080, () => {
    console.log('Servidor express rodando')
});