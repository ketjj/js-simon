// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const container = document.getElementById('upper');
const grids = createBoxes();



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
}


const myTimeout = setTimeout(myNumbers, 5000);

function myNumbers(){
  let insertedNumber = getNumberprompt();
}


function getNumberprompt(){

  for(let i = 0; i < 5; i++){
    
    let insertNumber = prompt('Inserire ' + (i+1) + '° numero memorizzato da 1 a 50');

    while (isNaN(insertNumber)){
      alert('Non ha inserito un numero... riprova');
      insertNumber = prompt('Inserire ' + (i+1) + '° numero memorizzato da 1 a 50');
    }

    insertNumber = parseInt(insertNumber);
  }
}



function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}