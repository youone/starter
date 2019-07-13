const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

app.get('/longpoll', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    await sleep(2000);
    res.send(JSON.stringify({ a: 1 }));
});


app.listen(3001, () =>
    console.log(`Example app listening on port 3001`),
);