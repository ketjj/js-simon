// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const container = document.getElementById('upper');
const grids = createBoxes();

let printNumbers = [];
// CREARE GRID

function createBoxes(){
  for(let i = 0; i < 5; i++){
    createElement();
  }
}

function createElement(){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = getRandomNumber(1, 50);
  container.append(box);
  console.log(box.innerText);

  let printNumbers = [];

  let flag = false;
  while (!flag)
  if (!printNumbers.includes(box.innerText)) {
    printNumbers.push(parseInt(box.innerText));
    flag = true;
  }else{
    printNumbers.innerText = generateRandomNumber(1, 50);
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
    

    let flag = false;

    if(!numGuessArray.includes(insertNumber)){
      numGuessArray.push(parseInt(insertNumber));
      flag = true;
    }else{
      flag = false;
    }

    insertNumber = parseInt(insertNumber).value;
    
  }
}

// HO generato array prompt
const numGuessArray = [];
console.log(numGuessArray);


//GEnera i numeri random

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.querySelector('button').addEventListener('click', reset);

function reset(){
  // box.innerHTML = '';
}