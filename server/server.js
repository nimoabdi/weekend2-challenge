const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 5000;
const math = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// putting code here

app.get('/math', (req, res)=>{
    console.log('test GET');
    res.send(math);
  })










app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })