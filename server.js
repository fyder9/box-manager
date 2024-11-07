const express = require('express')
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();
const port = 3000; //server listening on this port

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Parsing delle richieste con JSON payload
app.use(express.urlencoded({ extended: true })); // Parsing delle richieste URL-encoded
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
  });

app.post('/endpoints/dashboard.html')

app.listen( port ,() => {
    console.log(`Server listening on port: ${port} `)
})
