const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/test', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/test.html'))
})
 
const port = process.env.PORT || 3000
app.listen(port, () =>
console.log(`Servidor levantado correctamente en: http://localhost:${PORT}`));

app.use(express.static('public'));