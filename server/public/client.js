$(document).ready(handleReady);


let numberOne;
`let simpleMathOperator;`
let numberTwo;
let operator = simpleMathOperator

function handleReady() {
    console.log("jquery is loaded!")
  $('.simpleMathOperator').on('click', mathServer)  
  $('#equals').on('click', equationValue)  
  $('#clear').on('click', clearButton)  

  }



function equationValue() {
  let theNumber = {
    mathOne: $('#number1').val(),
    mathTwo: $('#number2').val(),
    operator: simpleMathOperator
  }  
  
  
  $.ajax({
    url: '/mathsInput',
    method: 'POST',
    data: theNumber
}).then((response)=>{
  console.log('POST works', response);

  gettingHistory();

}).catch((error)=>{
  console.log('POST FAILED', error)
})
} 


function gettingHistory() {
  $('#history').empty();

  $.ajax({ 
    url: '/mathsInput',
    method: 'GET'
}).then((response)=>{
    console.log('GEt IS WORKING', response)

    // appendDom(response);

  }).catch((error)=>{
    console.log('POST FAILED', error)
  })

 
    // for (let calcObject of response) {
    $('#history').append(` 
      <li>${mathOne.number1} ${operator.simpleMathOperator} ${mathTwo.number2} = ${answer}</li>
    `)
  }




function mathServer() {
  simpleMathOperator = $(this).text()
  }

function clearButton() {
    $('#mathOne').val('');
    $('#simpleMathOperator').val('');
    $('#mathTwo').val('')
}












