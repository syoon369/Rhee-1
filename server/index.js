var express = require('express');
var app = express();
const cors = require('cors');
//const body = require('body-parser');
const PORT = process.env.PORT || 3001;
const db = require('./config/db');
// const { response, urlencoded } = require('express');

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(cors());

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
        console.log(topics);
    });
    console.log("Get datas")
});
app.get('/data/:id', (req, res) => {
    db.query(`SELECT * FROM topic WHERE id=?`, [req.params.id], function (error, topic) {
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
    console.log(req.body.id, "req");
    const d = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content
    }
    db.query(`INSERT INTO topic(id, title, content) VALUES (?,?,?)`, [d.id, d.title, d.content], function (error, result) {
        if (error) {
            throw error;
        }
    })
    res.send(d);

    // if (req.body.title != null) {
    //     db.query(`INSERT INTO topic(id, title, content) VALUES (?,?,?)`, [req.body.id, req.body.title, req.body.content], function (error, result) {
    //         if (error) {
    //             throw error;
    //         }
    //         res.end;
    //     });
    // }

    // else {
    //     db.query(`DELETE FROM topic WHERE id = ?`, [req.body.id], function (error, result) {
    //         if (error) {
    //             throw error;
    //         }
    //         res.end;
    //     });
    // }
});

// app.post('/data/create/:id/:title/:content', (req, res) => {
//     db.query(`INSERT INTO topic(id, title, content) VALUES (?,?,?)`, [req.params.id, req.params.title, req.params.content], function (error, result) {
//         if (error) {
// app.post('/data/update/:id/:title/:content', (req, res) => {
//     db.query(`INSERT INTO topic(id, title, content) VALUES (?,?,?)`,[req.params.id,req.params.title,req.params.content],function(error, result){
//         if(error){
//             throw error;
//         }
//         // res.writeHead(302, {Location:`/data/${res.insertId}`});
//         res.end;
//     });
// });

// app.delete('/data/delete/:id', (req, res) => {
//     db.query(`DELETE FROM topic WHERE id = ?`, [req.params.id], function (error, result) {
//         if (error) {
//             throw error;
//         }
//         // res.writeHead(302, {Location:`/data/${res.insertId}`});
//         res.end;
//     });
// });

app.delete('/data/delete/:id', (req, res) => {
    db.query(`DELETE FROM topic WHERE id = ?`, [req.params.id], function (error, result) {
        if (error) {
            throw error;
        }
        // res.writeHead(302, {Location:`/data/${res.insertId}`});
        res.end;
    });
});
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});