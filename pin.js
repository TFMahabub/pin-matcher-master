//function to generate random numbers-
function getPin(){
  const roundNum = Math.round(Math.random()* 10000);
  const getStringNum = roundNum + '';
  const getStringLength = getStringNum.length;
  
  if(getStringLength === 4){
    return getStringNum;
  }
  else{
    return getPin();
  }
}


//Generate code button-
document.getElementById('generate-button').addEventListener('click', function(){
  //call the function to getPin-
  const randomNum = getPin();
  
  //set the numbers to the value-
  const input = document.getElementById('input-value');
  input.value = randomNum;
})


//calculator buttons-
document.getElementById('calculator').addEventListener('click', function(event){
  const numbers = event.target.innerText;
  
  //diclare the calculator input value-
  const inputValue = document.getElementById('input-value-calculator');
  const inputValueText = inputValue.value;

  //condition-
  if(isNaN(numbers)){
    if(numbers === 'C'){
      inputValue.value = '';
    }
    else if(numbers === '<'){
      let splitValue = inputValueText.split('');
      splitValue.pop();
      let joinValue = splitValue.join('');
      
      inputValue.value = joinValue;
    }
  }
  else{
    //get the input string value and plus the value-
    let sumString = inputValueText + numbers;
    inputValue.value = sumString;
  }
})



//submit button-
document.getElementById('submit-button').addEventListener('click', function(){
  const codeGenerateInput = document.getElementById('input-value').value;
  const calculatorInput = document.getElementById('input-value-calculator').value;

  //condition-
  if(calculatorInput === ''){
    alert('please type the code');
  }
  else if(codeGenerateInput === calculatorInput){

    console.log('code matched');
  }
  else{
    console.log('code not matched')
  }
})