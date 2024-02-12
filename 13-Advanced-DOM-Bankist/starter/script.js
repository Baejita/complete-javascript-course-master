'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/// ------ Lectures -------------------------
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// //**-- Selected Element */
// console.log(document.documentElement);
// console.log(document.head);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section')
// console.log(allSections);

// document.getElementById('section-1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// //ถ้าเป็น NODELIST ลบจะไม่หายไปจาก หน้าจอ

// console.log(document.getElementsByClassName('btn'))


// //***---- Creating and inserting elements--- *** */
// //.insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message')
// message.innerHTML = 'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// แทรกเข้าไปใน dom
// header.prepend(message); //อยู่ด้านบนสุดของกล่อง --ใน element ของ header
//header.append(message);//อยู่ด้านล่างสุดของกล่องใน element ของ header

//ถ้้าอยากมีทั้งบนและล่าง ให้ใช้ clone
//header.append(message.cloneNode(true));

// header.before(message); //ไปสร้างกล่องอยู่ --- ก่อน header


// //---- DELETE elements --------------------------------/
//   document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//     message.remove()
//   })

//   //styles เราไม่สามารถ log อออกค่า height ได้แต่เราใช้คำสั่งนี้ได้ 

//   console.log(getComputedStyle(message).height); //47.8261px
//   //เปลี่ยน style ได้
//   message.style.backgroundColor = '#37383d'
// //เพิ่มความสูง
//   message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40+'px' ; //ต้องแปลงให้เป็น 

// // การเปลี่ยนคุณสมบัตรผ่าน CSS setPoroperty ('ชื่อของสื่งที่จะเปลี่ยน)
//   document.documentElement.style.setProperty('--color-primary', 'orangered');

//   //Attributes standard
//   const logo = document.querySelector('.nav__logo');
//   console.log(logo.alt);
//   console.log(logo.src);
//   console.log(logo.className);

//   logo.alt = 'Beautiful mininalist logo';// เปลี่ยน ชื่อ attibute

//   //Non-standard
//   console.log(logo.designer); // แบบนี้ถึงจะได้
//   console.log(logo.getAttribute('designer'));  // แบบนี้ถึงจะได้
//   logo.setAttribute('company', 'Bankist') // เพิ่ม **** 

//   console.log(logo.src); //http://127.0.0.1:8080/img/logo.png
//   console.log(logo.getAttribute('src')); //img/logo.png

//   const link = document.querySelector('.nav__link--btn')
//   console.log(link.href);
//   console.log(link.getAttribute('href'));

//   ////****** ถ้าราตั้งชื่อ attribute เป็นแบบขีด เช่น data-version-number เราต้องเลือก */
//   console.log(logo.dataset.versionNumber);

//   //Classes แนะนำให้ใช้วิธีนี้
// logo.classList.add('c','j')
// logo.classList.remove('c','j')
// logo.classList.toggle('c','j')
// logo.classList.contains('c','j') //not includes

// //Don't USSE 
// logo.className = 'Jonas'

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// //หาตำแหน่งของ section1 เมื่อคลิก
// btnScrollTo.addEventListener('click',function(e) {
//   const s1coods = section1.getBoundingClientRect();
//   console.log(s1coods);
//   console.log(e.target.getBoundingClientRect());//หาตำแหน่งของตัวปุ่น btnScollto = Learn more
//   console.log('Current scroll (x/y', window, pageXOffset,pageYOffset); //กดตรงปุ่น้เพื่อดูว่าหน้าจอเลื่นลงมาเท่าไหร่แล้ว

//   console.log('Height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); //จะทราบว่าความกว้าง x สูง ของหน้าจอเท่าไหร่

//   //Scrolling
//   // window.scrollTo(s1coods
//   //   .left 
//   //   + window.pageXOffset, s1coods.top + window.pageYOffset
//   //   )

//   //วิธีแบบเก่า
//     // window.scrollTo({
//     //   left: s1coods.left + window.pageXOffset,
//     //   top: s1coods.top + window.pageYOffset,
//     //   behavior: 'smooth'
//     // });

//     //วิธีแบบใหม่
//     section1.scrollIntoView({
//       behavior: 'smooth'
//     })

// })

//Lecture addEventListener

// const h1 = document.querySelector('h1');
// const alertH1 =  function(e){ alert('addEvenlistener: Great! You are reading the heading :D')

// h1.removeEventListener('mouseenter',alertH1) // ทำให้เราฟังฟังก์ชั่นได้เพียงคั้งเดียวเท่านั้น 

// }


// //ปัจจุบันนิยมใช้แบบนี้มากกว่า เพราะสามารถเพิ่มหลายตัวได้ และสามารถใส่ตัวแปรเพิ่มได้เรื่อย ๆ 
// h1.addEventListener('mouseenter',alertH1)

// setTimeout(() =>h1.removeEventListener('mouseenter',alertH1) , 3000)
// // //อันนี้แบบเก่า
// // h1.onmouseenter = function(e){
// //   alert('onmouseenter: Great! You are reading the heading :D')
// // }


////////////////////*****/------------------------ */

//rgb(255,255,255)
/// สร้างตัวแปรที่เก็บ ฟังก์ชั่น การสร้างการสุ่ม rgb (ตัวเลข ก่อน)

const randomInt = (min,max) => Math.floor(Math.random()* max - min +1);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
console.log(randomColor());


//// แล้วค่อยมาใส่ฟังก์ชั่นเมื่อกด link ให้เปลี่ยนสีตามตัวแปร randomColor
//ถ้าคลิก element ย่อยสุดจะทำให้ parent เปลี่ยนสีตามไปด้วยเสมอ แต่ถ้า คลิกอันพ่อแม่ใหญ่กว่า เด็กๆ จะไม่เปลี่ยนตาม 
document.querySelector('.nav__link').addEventListener('click', function(e){
 this.style.backgroundColor = randomColor()
 console.log('LINK', e.target ,e.currentTarget); //เมื่อคลิกแล้วจะหาเป้าหมายว่ากดตรงไหน
 console.log(e.currentTarget === this);
 
 //หยุดการส่งต่อการเกิดเหตุการ์ณ์****----------*****
 //e.stopPropagation() // โดยทั่วไปไม่ควรหยุดการ propagation 
})

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()
  console.log('CONTAINER', e.target ,e.currentTarget);
  console.log(e.currentTarget === this);
})

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()
  console.log('NAVBAR', e.target,e.currentTarget);
  console.log(e.currentTarget === this);
},
true) //ถ้าใช่ true จะทำให้เมื่อเราคลิก nav จะส่งผลแต่ nav ไม่ผ่านตัวเอื่น ๆเข้าไป