//function for Generate random number-
function getRandomCode(){
  const randomNumbers = Math.round(Math.random() * 10000);
  const toString = randomNumbers + '';
  
  //condition for string length-
  if(toString.length >= 4){
    const inputValue = document.getElementById('input-value');
    inputValue.value = toString;
  }
  else{
    return getRandomCode();
  }
}

//Generate button click-handeler-
document.getElementById('generate-button').addEventListener('click',function(){
  //call the function to get random number-
  getRandomCode()

})


//calculator button's click handeler-
document.getElementById('calculator').addEventListener('click', function(event){
  const clickValue = event.target.innerText;
  const inputValues = document.getElementById('input-value-calculator');
  const inputValueText = inputValues.value;
  
  if(isNaN(clickValue)){
    if(clickValue === 'C'){
      inputValues.value = '';
    }
    else if(clickValue === '<'){
      const valueSplit = inputValueText.split('');
      valueSplit.pop();
      valueJoin = valueSplit.join('');
      inputValues.value = valueJoin;
    }
  }
  else{
    console.log('number')
    //add numbers-
    let plusValue = inputValueText + clickValue;
    inputValues.value = plusValue;
  }
})



//submit button click handeler-
document.getElementById('submit-button').addEventListener('click', function(){
  //input value diclaration-
  const generateCodeInput =document.getElementById('input-value');
  const generateCodeInputValue = generateCodeInput.value;
  const calculatorInput =document.getElementById('input-value-calculator');
  const calculatorInputValue = calculatorInput.value;

  //error massage diclaration-
  const matchedCode = document.getElementById('pin-matched');
  const notMatchCode = document.getElementById('pin-not-matched');


  //condition-
  if(calculatorInputValue === ''){
    alert('Please type the code');
  }
  else if(generateCodeInputValue === calculatorInputValue){
    notMatchCode.style.display = 'none';
    matchedCode.style.display = 'block';
  }
  else{
    notMatchCode.style.display = 'block';
    matchedCode.style.display = 'none';
  }
})