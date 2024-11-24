



const textInput = document.querySelector('#user-input[type="text"]');
const buttonClick = document.getElementById(
  'text-input');
const showResult = document.getElementById('result');
const checkButton = document.getElementById(
  'check-btn'
);
const userInput = document.getElementById('user-input')
const retryButton = document.getElementById('retry')



  
  //replacing all unknown sign to empty. lowercaps
  function cleanRegex(str){
   let update= str.toLowerCase();
   return update}
  
  //remove the punctuations
  function removePunct(update){
    let lol = update.split("").filter( 
     function matchA(char){
       return /[a-zA-Z0-9]/.test(char)
      }
    ).join("");
    return lol
  }
  
 //reverse function
 function reverseStr(arr){
  let seperate = arr.split("");
  let reversedWithArr = seperate.reverse();
let reversed = reversedWithArr.join("")
  return reversed
  }
  
//First lowercase everything, next remove all punctuations and see whether reverse matches with original, next add results to result div
   function cleanUP(str){
  let lowerC = cleanRegex(str);
  let final = removePunct(lowerC);
  let reversed = reverseStr(final);
  if(reversed===final){
   showResult.innerHTML=`
   ${str} is a palindrome!
   `;
   buttonClick.value=`${str} is a palindrome!`;
    userInput.className='hide';
    showResult.className='resultcorrect'
 return
  }
  else{showResult.innerHTML=`
   ${str} is not a palindrome
   `}
   userInput.className='hide';
    showResult.className='resultwrong'
   ;
    
 buttonClick.value=`${str}\n is not a palindrome!`;
  
   return;}
   
  

 
//the function directly involved with onclick, mainly to alert if input is empty
  function onChange(){
    let input = document.getElementById(
  'text-input').value
  if (input===""){
    alert('Please input a value')
    return
  }
  else{
   cleanUP(input);
   retryButton.className='retry'
  }
 
 }
//redo site
function revertBack(){
showResult.className='hide'
userInput.className='user-input';
retryButton.className='hide';
buttonClick.value="";}


  
  checkButton.addEventListener("click",onChange);
  retryButton.addEventListener("click",revertBack)