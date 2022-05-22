$(document).ready(handleReady);


function handleReady() {
    console.log("jquery is loaded!")
  $('#add').on('click', mathInputValue)  
  $('#multiply').on('click', mathInputValue)  
  $('#divide').on('click', mathInputValue)  
  $('#subtract').on('click', mathInputValue)  
  $('#equals').on('click', equationValue)  
  $('#clear').on('click', clearButton)  

  let simpleMath = '';

  

  }
