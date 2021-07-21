
var express = require('express');
var app = express();
const cors = require('cors');
var session = require('express-session')
var MySQLStore= require('express-mysql-session')(session)
//const body = require('body-parser');
const PORT = process.env.PORT || 3001;
const db = require('./config/db');
// const { response, urlencoded } = require('express');

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(cors({credentials: true,origin:true}));
app.set('trust proxy', true);
app.use(session({
    secret: 'rhee123',
    resave: false,
    saveUninitialized: true,
    store:new MySQLStore({
        host:'localhost',
        port:3306,
        user:'root',
        password:'1234',
        database:'rhee'
    }),
    cookie: {	
        secure: false
    }
  }))

app.get('/', (req, res) => {
    console.log("Get /");
    req.session.where = "Get /";
    req.session.save(function(){
        console.log(req.session);
        if(req.session.nickname != null){
            console.log(req.session.nickname);
            res.send(req.session.nickname);
        }else {
            res.sendStatus(204);
        }
     });
    //res.send("/");
});

app.get('/data', (req, res) => {
    console.log("Get Data");
    req.session.where = "Get data";
    req.session.save(function(){
        console.log(req.session);
        db.query(`SELECT board_id,title,content,nickname FROM board b , user u WHERE b.writer=u.user_id ORDER BY date ASC`, function (error, result) {
            if (error) {
                throw error;
            }
            res.send(result);
            //console.log(topics);
        });
     });
});

// app.get('/data/:id', (req, res) => {
//     console.log("Get Data:id");
//     db.query(`SELECT * FROM board WHERE board_id=?`, [req.params.id], function (error, topic) {
//         if (error) {
//             throw error;
//         }
//         res.send(topic);
//         res.end();
//     });
// });

app.post('/', (req, res) => {
    console.log("Post /");
    res.send(req.body);
});

// app.post('/data', (req, res) => {
//     console.log("Post Data");
//     const d = {
//         id: req.body.id,
//         writer: req.body.writer,
//         title: req.body.title,
//         content: req.body.content
//     }
//     db.query(`INSERT INTO board(board_id, writer, title, content) VALUES (?,?,?,?)`, [d.id, d.writer, d.title, d.content], function (error, result) {
//         if (error) {
//             throw error;
//         }
//     })
//     res.send(d);
// });

app.post('/data/board', (req, res) => {
    console.log("Post Board");
    const d = {
        title: req.body.title,
        content: req.body.content
    }
    console.log(d);
    console.log(req.session);
    if(req.session.user_id != null) {
        console.log("db insert");
        db.query(`INSERT INTO board(writer, title, content) VALUES (?,?,?)`, [req.session.user_id, d.title, d.content], function (error, result) {
            if (error) {
                throw error;
            }
            res.sendStatus(200);
            return;
        })
    }
});

app.post('/data/board/delete', (req, res) => {
    const d = {
        board_id:req.body.board_id
    }
    console.log("Delete Data");
    console.log(req.session.user_id, d.board_id);
    db.query(`DELETE FROM board WHERE writer = ? and board_id = ?`, [req.session.user_id, d.board_id], function (error, result) {
        if (error) {
            throw error;
        }
    
        // res.writeHead(302, {Location:`/data/${res.insertId}`});
        res.sendStatus(200);
        console.log(result);
    });
});``

app.post('/signup', (req, res) => {
    console.log("Post SignUp");
    const d = {
        id: req.body.id,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        birth: req.body.birth,
        sex: req.body.sex
    }
    console.log(d);
    db.query(`INSERT INTO user(user_id, password, f_name, l_name, nickname, birth_date, sex) VALUES (?,?,?,?,?,?,?)`, [d.id, d.password, d.firstname, d.lastname, d.nickname, d.birth, d.sex], function (error, result) {
        if (error) {
            throw error;
        }
    })
    res.send(d);
});

app.post('/signin', (req, res) => {
    console.log("Post Singin");
    const d = {
        id: req.body.id,
        password: req.body.password,
    }
    console.log(d);
    db.query(`SELECT user_id, f_name, l_name, nickname FROM user WHERE user_id=? and password=?`, [d.id, d.password], function (error, result) {
        if (error) {
            res.sendStatus(204);
            throw error;
        }
        if(result.length===0){
            res.sendStatus(204);
        }else {
            req.session.user_id = result[0].user_id;
            req.session.nickname = result[0].nickname;
            req.session.where = "signin";
            req.session.save(function(){
                console.log(req.session.nickname);
                res.send(req.session.nickname);
            })
        }
    })
});

app.get('/logout', (req, res) => {
    console.log("post logout");
    delete req.session.nickname;
    delete req.session.user_id;
    delete req.session.where;
    req.session.save(()=>{
        res.redirect("/");
    });

});

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});