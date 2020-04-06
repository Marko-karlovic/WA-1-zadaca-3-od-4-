import express from 'express';
import routes from './routes';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem ce web server slušati

    // Get weather info
let weather = ["Sunčano je!", "Pada kiša", "Oblačno je, ostani unutra"];
var current = weather[Math.floor(Math.random() * weather.length)];
    //Get time info 
var day = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();
var hour = new Date().getUTCHours();
var minute = new Date().getUTCMinutes();

const staticMiddleware = express.static('src')
app.use('/', staticMiddleware)
app.get('/time', (req, res) => res.send(day + ` / ` + month + ` / ` + year + ` , ` + hour + ` : ` + minute))
app.get('/weather', (req, res) => res.send(current));


app.listen(port, () => console.log(`Slušam na portu ${port}!`))