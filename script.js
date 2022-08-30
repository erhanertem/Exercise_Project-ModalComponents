'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnShowModal = document.querySelector('.show-modal'); //Selects only thr first matching element
const btnShowModal = document.querySelectorAll('.show-modal'); //Selects all the matching elements in a nodelist array

console.log(btnShowModal); //it selects only the first one.

//forloop that sorts thru the nodelist given by the queryselectorall
for (let i = 0; i < btnShowModal.length; i++) {
  // console.log(btnShowModal[i].textContent); //comsole.logs all the elements' content in the array of as provided by the queryselectorall
  btnShowModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden'); // takes the hidden from its class name to make modal display
    overlay.classList.remove('hidden'); //make overlay display
  });
}

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden'); // make modal hide
  overlay.classList.add('hidden'); //make overlay hide
});
