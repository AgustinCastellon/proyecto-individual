const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/test', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/test.html'))
})
 
app.listen(3000, () =>
console.log('Servidor levantado correctamente'));
app.use(express.static('public'));