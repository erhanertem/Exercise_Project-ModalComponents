'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnShowModal = document.querySelector('.show-modal'); //Selects only thr first matching element
const btnShowModal = document.querySelectorAll('.show-modal'); //Selects all the matching elements in a nodelist array

const closeModal = function () {
  modal.classList.add('hidden'); // make modal hide
  overlay.classList.add('hidden'); //make overlay hide
}; //functions assigned to variables needs to be declared first before calling them
const openModal = function () {
  modal.classList.remove('hidden'); // takes the hidden from its class name to make modal display
  overlay.classList.remove('hidden'); //make overlay display
};

console.log(btnShowModal); //it selects only the first one.

//forloop that sorts thru the nodelist given by the queryselectorall
for (let i = 0; i < btnShowModal.length; i++) {
  // console.log(btnShowModal[i].textContent); //comsole.logs all the elements' content in the array of as provided by the queryselectorall
  btnShowModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    openModal();
  });
}

// CLOSING MODAL
//#1.click on close btn on the modal to close the modal
btnCloseModal.addEventListener('click', closeModal);
// btnCloseModal.addEventListener('click', function () {
//   closeModal();
// }); //either above or this , same stuff
//#2.click on overlay area to close the modal
overlay.addEventListener('click', closeModal);

//ADD KEYBOARD EVENT for closing modal with ESC BUTTON
document.addEventListener('keydown', function (e) {
  console.log(`A key is pressed`);
  console.log(e); // reports the keyboardevent nodelist which reports the pressed key!
});
