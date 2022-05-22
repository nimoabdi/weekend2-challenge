$(document).ready(handleReady);


function handleReady() {
    console.log("jquery is loaded!")
  $('#simpleMathOperator').on('click', mathServer)  
  $('#equals').on('click', equationValue)  
  $('#clear').on('click', clearButton)  

  }

let mathOp;

function equationValue() {
  let theNumber = {
    numberOne: $('#mathOne').val(),
    numberTwo: $('#mathTwo').val(),
    operator: mathOp
  }
  $.ajax({
    url: '/math',
    method: 'POST',
    data: theNumber
}).then((response)=>{
  console.log('POST works', response);

  appendToDom()

}).catch((error)=>{
  console.log('POST FAILED', error)
})
  
}


function appendToDom() {
  $.ajax({ 
    url: '/math',
    method: 'GET'
}).then((response)=>{
    console.log('GEt IS WORKING', response);
  for (let num of response) {
    let answers = Math.round(`${num.answers}
    `) 
    $('#answers').empty();
    $('#answers').append(answers)
    $('#answerList').append(`
    <li>${num.mathOne}
        ${num.mathTwo}
        ${num.simpleMathOperator} = {answers}</li>
    `)
  }
    
  
    
})
}


function mathServer() {
  mathOp = $(this).text()
  }

  function clearButton() {
    $('#mathOne').val('');
    $('#simpleMathOperator').val('');
    $('#mathTwo').val('')
}












