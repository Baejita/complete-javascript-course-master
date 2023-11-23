'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);
// console.log('Button clicked');
//ต้องไม่มีจุดเพราะจุดคื selector

//การทำแบบนี้จะง่ายมากเวลาเรากดปิดเพราะถ้าเราทำแบบการเปลี่ยนมีสิบอันก็ต้องเปลี่ยนเยอะ ดังนั้นการที่เรา.hidden{display:none;}ดีงามมม

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log('A key was pressed');
  //   console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
