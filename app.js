require('dotenv').config()
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT


// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Midelwares
// Servir contenido estatico
app.use( express.static('public') )

// Todo: Lo de arriba no permite que lo de abajo se ejecute
// Por eso se lo puso en comentario
// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Adhamin',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  // res.sendFile( __dirname + '/public/generic.html')
  res.render('generic', {
    nombre: 'Adhamin',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', (req, res) => {
  // res.sendFile( __dirname + '/public/elements.html')
  res.render('elements', {
    nombre: 'Adhamin',
    titulo: 'Curso de Node'
  })
})

app.get('/hola-mundo', (req, res) => {
  res.send('Hello World in its respective path')
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})