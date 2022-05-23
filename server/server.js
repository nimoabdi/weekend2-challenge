const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const PORT = 5000;

let maths = [];
let theNumber;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// putting code here

// const mathNumbers =[];



// function numbersCalculation(){
//   if(mathNumbers[0].)
// }



// mathNumbers (theInputs)
// maths.push(theInputs);
// console.log('this pushes the inputs', mathNumbers);



app.get('/maths', (req, res)=>{
  console.log('test GET');
  res.send(maths);
})


app.post('/mathsInputs', (req, res)=>{
  let theInputs = req.body;
  console.log('hope this works', theInputs);
  
  mathNumbers (theInputs)
  maths.push(theInputs);
  console.log('this pushes the inputs', mathNumbers);
  
  // console.log('test POST');
  res.sendStatus(201);
})

function mathNumbers(log) {
  if (log.simpleMathOperator === '+') {
    addTheInputs(log);
  }
}

function addTheInputs(addition) {
  addition.mathAnswers = Number(addition.inputOne) + Number(addition.inputTwo);

  console.log('adding the numbers', addTheInputs)
}








app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})