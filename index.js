// const http = require('http') 
// const server = http.createServer((req, res) =>
// { 
//     console.log(req.url);
//     if(req.url === '/yellow'){
//         res.end('Hello Node.js')
//     }  {
//         res.end('Other route')
//     }
// }) 

// server.listen(5000, console.log('500 is running'))

const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.ejs'))
})

app.get('/contact.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/contact.html'))
})

app.get('/post.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

// app.get('/house', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'house.html'))
// })
const PORT = 1234
app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
 