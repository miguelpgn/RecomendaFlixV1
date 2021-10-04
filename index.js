const express = require('express')
const app = express()

var path = require('path')
app.set('views', path.join(__dirname, '/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

filmes = '[{"nome" : "Shrek", "imagem" : "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg"}]'
var meusfilmes = JSON.parse(filmes);

app.get('/login', (req, res)=>
{
    res.render('login');
})

app.get('/', (req, res)=>
{
    res.render('index');
})

app.get('/filmes', (req, res, next) =>
{
    res.json([meusfilmes[0].nome, meusfilmes[0].imagem]);
})

app.put('/put/:id', (req, res) =>
{
    console.log("Chegou no PUT...");
    res.status(200).json([meusfilmes[0].nome, meusfilmes[0].imagem]);
})

app.post('/post', (req, res) =>
{
    console.log("Chegou no POST...");
    res.status(200).json([meusfilmes[0].nome, meusfilmes[0].imagem]);
})

app.delete('/delete/:id', (req, res) =>
{
    console.log("Chegou no DELETE...")
})

app.listen(3000, console.log('servidor rodando em localhost:3000'))
app.use(express.static('public'))
