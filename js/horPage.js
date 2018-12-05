let index = 0; // geeft welke link actief moet zijn en welke inhud moet worden voorgeschoven
let main = document.querySelector('.inhoud');
let deLinkjes = document.querySelectorAll('.nav__menuitem');
let alleLinkjesArr =[];
deLinkjes.forEach( (item) => {
  item.addEventListener('click', (e) => {
    index = alleLinkjesArr.indexOf(item);
    activeren(index);
  });
  alleLinkjesArr.push(item);
});
const pijlLinks = document.querySelector('.nav__pijl--links');
const pijlRechts = document.querySelector('.nav__pijl--rechts');
const activeren = (num) => {
  // verwijder eventuele actieve statussen van de linkjes
  verwijderActief();
  // toon of verwijder pijltjes
  toonVerbergpijlen();
  // activeer de link nul
  alleLinkjesArr[num].classList.add('nav--actief');
  // schuif inhoud nut voor
  main.style.marginLeft = (-100*num) + "vw";
}

const verwijderActief = () => {
  alleLinkjesArr.forEach( (item) => {
    item.classList.remove('nav--actief');
  })
}

// script voor pijltjes
// functie om de volgende setion te activeren
const volgende = () => {
  if(index<alleLinkjesArr.length-1){
    index++;
  } else{
    index = 0;
  }
  activeren(index);
}

const vorige = () => {
  if(index>0){
    index--;
  } else{
    // de index mag nooit onder de 0 komen
    index = alleLinkjesArr.length-1;
  }
  activeren(index);
}

const toonVerbergpijlen = () =>{
  if( index == 0 ) {
    pijlLinks.style.display = "none";
  } else {pijlLinks.style.display = "block";}

  if (index == alleLinkjesArr.length -1) {
    pijlRechts.style.display = "none";
  } else {pijlRechts.style.display = "block";}
}

pijlRechts.addEventListener('click', volgende);
pijlLinks.addEventListener('click', vorige);

// toetsenbord events toevoegen
document.addEventListener('keyup', (e) =>{
  if( e.keyCode == 39 || e.keyCode == 32){
    volgende();
  }
  if (e.keyCode == 37){
    vorige();
  }
})
// swipe events toevoegen met pureSwipe library
document.addEventListener('swiped-left', volgende);
document.addEventListener('swiped-right', vorige);

// bij de start eerste item
activeren(index);
