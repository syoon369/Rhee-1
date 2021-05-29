var express = require('express');
var app = express();
const cors = require('cors');
//const body = require('body-parser');
const PORT = process.env.PORT || 3302;
const db = require('./config/db');
// const { response, urlencoded } = require('express');

app.use(express.json());
app.use(express.urlencoded({extend:true})); 
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});

app.get('/hello', (req, res) => {
    res.send({ hello: 'asdf' });
    console.log("Get hello")
});

app.get('/', (req, res) => {
    res.send({ main: 'This is main page.' });
    console.log("Get main")
});

app.get('/data', (req, res) => {
    db.query(`SELECT * FROM topic`, function (error, topics) {
        if (error) {
            throw error;
        }
        res.send(topics);
        //console.log(topics);
    });
    console.log("Get datas")
});

app.get('/data/:id', (req, res) => {
    db.query(`SELECT * FROM topic WHERE id=?`,[req.params.id] ,function (error, topic) {
        if (error) {
            throw error;
        }
        res.send(topic);
        console.log(topic);
        res.end();
    });
});

app.post('/data', (req, res) => {
    // var id = req.data.id;
    // var title = req.data.title;
    // var content = req.data.content;
    // console.log(req.query,'data posted');
    console.log(req.body.id, "req");
    const d = {
        id:req.body.id,
        title:req.body.title,
        content:req.body.content
    }
    res.send(d);
    // res.send("{ id : " + id + "\ntitle : " + title + "\ncontent : " + content+ " }" );
    // console.log(res, "res");
});

// app.post('/data/create/:id/:title/:content', (req, res) => {
//     db.query(`INSERT INTO topic(id, title, content) VALUES (?,?,?)`,[req.params.id,req.params.title,req.params.content],function(error, result){
//         if(error){
//             throw error;
//         }
//         // res.writeHead(302, {Location:`/data/${res.insertId}`});
//         res.end;
//     });
// });
app.delete('/data/delete/:id', (req, res) => {
    db.query(`DELETE FROM topic WHERE id = ?`,[req.params.id],function(error, result){
        if(error){
            throw error;
        }
        // res.writeHead(302, {Location:`/data/${res.insertId}`});
        res.end;
    });
});



app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});