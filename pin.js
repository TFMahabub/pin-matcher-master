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


//Generate-button-
document.getElementById('generate-button').addEventListener('click', function(){
  //call the function to getPin-
  const randomNum = getPin();
  
  //set the numbers to the value-
  const input = document.getElementById('input-value');
  input.value = randomNum;
})


//funtion for calculator-
document.getElementById('calculator').addEventListener('click', function(event){
  const numbers = event.target.innerText;
  
  

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