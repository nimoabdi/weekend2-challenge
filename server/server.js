const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const PORT = 5000;


let historyIn = [];
let theNumber;
let answer = equationIn
// let answerIn = answer;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// putting code here



app.post('/mathsInput', (req, res)=>{
  theNumber = req.body;
  console.log('hope this works');
  equationIn();


  // console.log('test POST');
  res.sendStatus(201);
})

app.get('/mathsInput', (req, res)=>{
  console.log('test GET');
  res.send();
})


function equationIn() {
switch (theNumber.simpleMathOperator) {
  case '+':
   answer  =  Number(theNumber.mathOne) + Number(theNumber.mathTwo)
    break;
  case '*':
    answer = Number(theNumber.mathOne) * Number(theNumber.mathTwo) 
    break;
    case '-':
      answer = Number(theNumber.mathOne) - Number(theNumber.mathTwo) 
    break;
   case '/':
    answer = Number(theNumber.mathOne) / Number(theNumber.mathTwo) 
     break; 
}


let finalCalc = {
  mathOne: theNumber.mathOne,
  mathTwo: theNumber.mathTwo,
  simpleMathOperator: theNumber.simpleMathOperator,
  answerIn: answer
}

historyIn.push(finalCalc)
console.log('history array', historyIn);
}
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})