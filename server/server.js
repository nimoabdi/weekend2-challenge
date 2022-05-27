const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const PORT = 5000;


let history = [];
let theNumber;
let answerValue;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// putting code here



app.post('/maths', (req, res)=>{
  theNumber = req.body;
  console.log('hope this works');
  equationIn();

  
  // console.log('test POST');
  res.sendStatus(201);
})

app.get('/maths', (req, res)=>{
  console.log('test GET');
  res.send(maths);
})
function equationIn() {
switch (theNumber.simpleMathOperator) {
  case '+':
   answer  =  Number(theNumber.mathOne) + Number(theNumber.mathTwo)
    break;
  case '-':
    answer = Number(theNumber.mathOne) * Number(theNumber.mathTwo) 
    break;
    case '*':
      answer = Number(theNumber.mathOne) - Number(theNumber.mathTwo) 
    break;
   case '/':
    answer = Number(theNumber.mathOne) / Number(theNumber.mathTwo) 
     break; 
}
}


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})