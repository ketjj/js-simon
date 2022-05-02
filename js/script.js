// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const insertNumbers = []; // numeri generati random
console.log(insertNumbers);


const correctNumbers = [];


const container = document.getElementById('upper');
const lowerContainer = document.getElementById('lower');

createBoxes();

//SET TIME OUT


const myTimeout = setTimeout(getNumberprompt, 6000);
console.log(numGuessArray, 'numeri inseriti ora');

// CREARE GRID
function createBoxes(){
  for(let i = 0; i < 5; i++){
    createElement();   
  }
  console.log("Numeri Random Generati: " + insertNumbers)
  
}


function createElement(){
  const box = document.createElement('div');
  box.className = 'box';
  const boxText = document.createElement('span');
  box.append(boxText);
  boxText.className ='text';
  container.append(box);
  
  const myTimeToHide = setTimeout(hideNumbers, 5000);
  
  function hideNumbers(){
    boxText.classList.add('hide'); 
  }
  let randomNumber = getRandomNumber(1, 50)
  

  
  let f = false;
  while(!f)
  {
  if(!insertNumbers.includes(randomNumber)) {
    insertNumbers.push(randomNumber);
    f = true;
  } else{
    randomNumber = getRandomNumber(1, 50);
  }
} 
  boxText.innerHTML = randomNumber;
  
}

// Fare dei controlli ai numeri inseriti dal prompt

function getNumberprompt(){

  for(let i = 0; i < 5; i++){
    
    let insertNumber = prompt('Inserire ' + (i+1) + '° numero memorizzato su 5');
    
    while (isNaN(insertNumber) || (insertNumber > 50)){
      alert('Devi inserire solo un numero da 1 a 50, riprova!');
      insertNumber = prompt('Inserire ' + (i+1) + '° numero memorizzato su 5');    
    }
     
    const box = document.createElement('div');
    box.className = 'box2'
    lowerContainer.append(box);
    const boxText = document.createElement('span');
    boxText.innerHTML = insertNumber;
    box.append(boxText);

    
    if(insertNumbers.includes(parseInt(insertNumber)))
    {
      correctNumbers.push(parseInt(insertNumber))
    }
  }

  console.log("array_generato: " + insertNumbers)
  console.log("array_indovinato: " + correctNumbers)
  
  document.getElementById('result-msg').innerHTML = 
  `
   Hai indovinato <strong>${correctNumbers.length}</strong> su <strong>${insertNumbers.length}</strong> numeri. <br>
   I numeri indovinati sono: ${correctNumbers}
  `;





}


//GEnera i numeri random

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
