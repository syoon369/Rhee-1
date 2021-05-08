var express = require('express');
var app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/hello', (req, res) => {
    res.send({ hello : 'Response' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})