// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.





const numGuessArray = [];
console.log(numGuessArray);

let insertNumbers = [];

const correctNumbers = [];

const container = document.getElementById('upper');
const lowerContainer = document.getElementById('lower');
const grids = createBoxes();
const grids2 = createBoxes2();


// CREARE GRID

function createBoxes(){
  for(let i = 0; i < 5; i++){
    createElement();
   
  }
}
function createBoxes2(){
  for(let i = 0; i < 5; i++){
    userNumber();  
  }
}


function createElement(){
  const box = document.createElement('div');
  box.className = 'box';
  const boxText = document.createElement('span');
  box.append(boxText);
  boxText.innerHTML = getRandomNumber(1, 50);
  boxText.className ='text';
  
  container.append(box);
  console.log(boxText.innerText);
  insertNumbers = [];

  let f = false;
  while(!f)
  if(!insertNumbers.includes(boxText.innerText)) {
    insertNumbers.push(parseInt(boxText.innerText));
    f = true;
  } else{
    boxText.innerText = generateRandomNumber(1, 50);
  }
}


function userNumber(number) {
  const box = document.createElement('div');
  box.className = 'box2'
  const boxText = document.createElement('span');
  box.append(boxText);
  // boxText.innerHTML = numGuessArray;
  boxText.className ='text';

  if(insertNumbers.includes(number)){
    sameAnswer++;
    // box.classList.add('green');
    correctNumbers.push(number);
  }
  userNumber.innerText = number;
  lowerContainer.append(box);
 
}

//SCORE 
let sameAnswer = 0;

function score() {
  if (sameAnswer === 1) {
  }else if ((sameAnswer > 1) && (sameAnswer < 5)) {

  }else if (sameAnswer === 5) {
    
  }else{
    // document.getElementById('result-msg').innerHTML = `Non hai indovinato nessun numero! Riprova!`
  }
}

//SET TIME OUT

const myTimeout = setTimeout(myNumbers, 5000);

function myNumbers(){
  let insertedNumber = getNumberprompt();
}

function myStopFunction() {
  clearInterval(myTimeout);
}


// Fare dei controlli ai numeri inseriti dal prompt

function getNumberprompt(){

  for(let i = 0; i < 5; i++){
    
    let insertNumber = prompt('Inserire ' + (i+1) + '° numero memorizzato su 5');

    numGuessArray.push(insertNumber);
    
    while (isNaN(insertNumber) || (insertNumber > 50)){
      alert('Devi inserire solo un numero da 1 a 50, riprova!');
      insertNumber = prompt('Inserire ' + (i+1) + '° numero memorizzato su 5');
    }
    
    let n = false;

    if(!numGuessArray.includes(insertNumber)){
      numGuessArray.push(parseInt(insertNumber));
      n= true;
    }else{
      n = false;
    }

    insertNumber = parseInt(insertNumber).value;
  }
}


//GEnera i numeri random

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.querySelector('button').addEventListener('click', reset);

function reset(){
  // box.innerHTML = '';
}