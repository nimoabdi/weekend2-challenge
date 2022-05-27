$(document).ready(handleReady);


let numberOne;
let simpleMathOperator;
let numberTwo;

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
    url: '/mathsInputs',
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
  $.ajax({ 
    url: '/maths',
    method: 'GET'
}).then((response)=>{
    console.log('GEt IS WORKING', response)

    appendDom(response);

  }).catch((error)=>{
    console.log('POST FAILED', error)
  })
//     $('#answer').empty();
//     $('#history').empty();
//     for (let equation of response) {
//       let total = Math.round(`${equation.answer}`) 
//     $('.answer').append(total)
//     $('.history').append(` 
//       <li>${equation.numberOne} ${equation.operator} ${equation.numberTwo} = ${answer}</li>
//     `)
//   }
// })

}

function appendDom(response) {
    $('#history').empty();
    for (let equation of response) {
    $('#history').append(` 
      <li>${equation.numberOne} ${equation.simpleMathOperator} ${equation.numberTwo} = ${answer}</li>
    `)
  }
}



function mathServer() {
  simpleMathOperator = $(this).text()
  }

function clearButton() {
    $('#mathOne').val('');
    $('#simpleMathOperator').val('');
    $('#mathTwo').val('')
}












