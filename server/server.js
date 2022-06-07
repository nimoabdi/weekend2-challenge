const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const PORT = 5000;


// let history = [];
// let theNumber;
// let answer;
// let answerIn = answer;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// putting code here



app.post('/mathsInput', (req, res)=>{
  theNumber = req.body;
  // console.log('hope this works');
  equationIn();


  // console.log('test POST');
  res.sendStatus(200);
})

app.get('/mathsInput', (req, res)=>{
  // console.log('test GET');
  res.send(history);
});
let history = [];
let theNumber;
let answer;

function equationIn() {
switch (theNumber.operator) {
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
    operator: theNumber.operator,
    answerIn: answer
  }
history.push(finalCalc)
console.log('history array', history);
}

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})