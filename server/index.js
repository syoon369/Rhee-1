var express = require('express');
var app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const db = require('./config/db');

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

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
        console.log(topics);
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

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/data', (req, res) => {
    console.log(req.body[1]);
    res.send(req.body[1]);
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

// app.post('/data/update/:id/:title/:content', (req, res) => {
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