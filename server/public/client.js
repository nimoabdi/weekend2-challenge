$(document).ready(handleReady);


// let numberOne;
// let simpleMathOperator;
// let numberTwo;
// let operator = simpleMathOperator

function handleReady() {
    console.log("jquery is loaded!")
  $('.simpleMathOperator').on('click', mathServer)  
  $('#equals').on('click', equationValue)  
  $('#clear').on('click', clearButton)  

  }

let mathOperator;


function equationValue() {
  let theNumber = {
    mathOne: $('#mathOne').val(),
    mathTwo: $('#mathTwo').val(),
    operator: mathOperator
  }  
  $.ajax({
    url: '/mathsInput',
    method: 'POST',
    data: theNumber
}).then((response)=>{
  console.log('POST works', response);
  gettingHistory();

// }).catch((error)=>{
//   console.log('POST FAILED', error)
});
} 

function gettingHistory() {
  // $('#answerIn').empty();
  // $('#answerIn').append(answerIn);
  
  $.ajax({ 
    url: '/mathsInput',
    method: 'GET'
})
.then((response)=> {
    console.log('GEt IS WORKING', response) 
    $('.history').empty();
    for (let calcObject of response) {
      let answerIn = Math.round(`${calcObject.answerIn}`) 
      $('.answerIn').empty();
      $('.answerIn').append(answerIn);
    $('.history').append(` 
      <li>${calcObject.mathOne} ${calcObject.operator} ${calcObject.mathTwo} = ${answerIn}</li>
    `);
    }
  });
}

function mathServer() {
  mathOperator = $(this).text()
  }

function clearButton() {
   $('.answerIn').empty();
   $('input').val('');
}