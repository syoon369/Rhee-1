var express = require('express');
var app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const db = require('./config/db');

app.use(cors());

app.get('/hello', (req, res) => {
    res.send({ hello : 'asdf' });
    console.log("Get hello")
})

app.get('/', (req, res) => {
    res.send({ main : 'This is main page.' });
    console.log("Get main")
})

app.get('/data', (req, res) => {
    db.query(`SELECT * FROM topic`,function(error, topics){
        if(error){
            throw error;
        }
        var i=0;
        var list='';
        res.send(topics);
        console.log(topics);
    });
    console.log("Get datas")
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})