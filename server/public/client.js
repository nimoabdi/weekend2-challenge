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
    url: '/mathsInputs',
    method: 'POST',
    data: theNumber
}).then((response)=>{
  console.log('POST works', response);

  appendToDom()

}).catch((error)=>{
  console.log('POST FAILED', error)
})
  
}


  $.ajax({ 
    url: '/maths',
    method: 'GET'
}).then((response)=>{
    console.log('GEt IS WORKING', response);


})

function appendToDom() {

  $('#answers').empty();
  $('#answers').append(`
  
  `)
  // let answerList = Math.round(`${num.answerList}`)
  $(`#answerList`).empty();
  
for (let num of allTheAnswers) {
  // let answerList = Math.round(`${num.answerList}`)
  $(`#answerList`).append(answerList)(`
  <li>${num.mathOne}
    ${num.mathTwo}
    ${num.simpleMathOperator} = ${num.maths}`)
  
    let answerList = Math.round(`${num.answerList}`)
    console.log('this should show the answers on dom', allTheAnswers)
}  
}




  



function mathServer() {
  mathOp = $(this).text()
  }

  function clearButton() {
    $('#mathOne').val('');
    $('#simpleMathOperator').val('');
    $('#mathTwo').val('')
}












