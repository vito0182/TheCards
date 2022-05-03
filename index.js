const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const MD5 = require("crypto-js/md5");
const app = express();
const porta = 3000;

const Aluno = "Fulano de Tal";
const Turma = "xxxxxx";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.ejs',{
        Aluno: Aluno,
        Turma: Turma,
    });
});

app.get('/verifica', function(req, res) {
    res.render('verifica.ejs',{
        nome:'Teste',
        senha:'12345',
        senhaMD5:MD5("12345").toString(),
        Aluno: Aluno,
        Turma: Turma,
    });
});

app.post('/verifica', function(req, res) {
    res.render('verifica.ejs',{
        nome: req.body.nome,
        senha: req.body.senha,
        senhaMD5:MD5(req.body.senha).toString(),
        Aluno: Aluno,
        Turma: Turma,
    });
});


app.listen(porta, () => {
    console.log('Servidor rodando em localhost:' + porta);
}); 