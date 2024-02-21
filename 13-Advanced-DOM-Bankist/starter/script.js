'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling หาตำแหน่งของ section1 เมื่อคลิก
btnScrollTo.addEventListener('click', function (e) {
  const s1coods = section1.getBoundingClientRect();
  console.log(s1coods);
  console.log(e.target.getBoundingClientRect()); //หาตำแหน่งของตัวปุ่น btnScollto = Learn more
  console.log('Current scroll (x/y', window, pageXOffset, pageYOffset); //กดตรงปุ่น้เพื่อดูว่าหน้าจอเลื่นลงมาเท่าไหร่แล้ว

  console.log(
    'Height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //จะทราบว่าความกว้าง x สูง ของหน้าจอเท่าไหร่

  //Scrolling
  // window.scrollTo(s1coods
  //   .left
  //   + window.pageXOffset, s1coods.top + window.pageYOffset
  //   )

  //วิธีแบบเก่า
  // window.scrollTo({
  //   left: s1coods.left + window.pageXOffset,
  //   top: s1coods.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  //วิธีแบบใหม่การตั้งค่าเลื่อนจอแบบ Smooth
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

////// Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();

//     console.log("LINK");// เวลาเรากดลิงค์มันจะเด่้งไปตำแหน่งนั้นๆ  เลยเราต้งป้องกันการเกิด ถ้าเราจะทำการเลื่อนแบบ smooth
//     const id =this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })

//1. Add event listeners to common parent element
//2. Determine whate element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy จับคู่เพื่อป้องการการไปกดตรง ที่ไม่มช่ลิงค์แล้วเกิดข้อผิดพลาดขึ้น
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK'); // เวลาเรากดลิงค์มันจะเด่้งไปตำแหน่งนั้นๆ  เลยเราต้งป้องกันการเกิด ถ้าเราจะทำการเลื่อนแบบ smooth
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//Tabbed components แนวคิดคือ การลบ active และเพิ่ม active เข้าไป

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //ทำให้เมื่อเรากดตัวเลขจะได้ป้องกันการเลือก แค่ 2 3  1

  //Guard clause
  if (!clicked) return;

  //active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  //Active content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active')); // ปิดอันที่ไม่ active ออกไป

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//วิธีนี้จะทำให้เมื่อเรามีหลาย tab จะทำให้การโหลดหน้าช้าลง
// tabs.forEach(t => t.addEventListener('click',() =>
//   console.log('TAB')
// ));

/// Menu fade animations
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation
// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords);
// window.addEventListener('scroll', function(){
//   console.log(window.scrollY);

//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky') ;
//   else nav.classList.remove('sticky');
// })

// const obsCallback = function(entries,observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }

// const obsOpsions = {
//   root:null,
//   threshold: [0, 0.2]       //หมายถึงจะเรียกฟังก์ชั่น callback เมื่อเข้าออก ถึง 0
//    //องค์ประกอบที่เป้าหมายตัดกัน หมายความว่า ถ้าเราเลื่อนหน้าจอลงมา 10% จะทำให้เกิดจุดตัดระหว่าง section 1 กับ viewport จะแสดงค่า intersecting จาก false เป็น ture
// }

// const observer = new IntersectionObserver(
//   obsCallback,obsOpsions
// );
// observer.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; //เพื่อหาส่วนสูง
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // เนื่องจากอยากให้มันแสดงเมื่อใกล้จะถึงให้ขนาดเท่ากับ nav bar
});

headerObserver.observe(header);

//Reveal sections การทำให้ค่อย ๆ เปิดเผย section ขึ้นมา
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});
// const handleHide = function(e) {
//   if(e.target.classList.contains('nav__link')){
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !==link) el.style.opacity = 1;
//     })

//     logo.style.opacity = 1;
//   }

// }

//การผ่าน อกิวเมนท์ เข้าไปในฟังชั่น mouseover

///LAZY loading images
const imgTargets = document.querySelectorAll('img[data-src');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src wiht data-src
  entry.target.src = entry.target.dataset.src;
  //ถ้าวางตรงนี้หมายความว่า  filter blur lazy-img ออก ครับ
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img'); //ถ้าวางตรงนี้หมายความว่า ต้องโหลดเสร็จแล้วถึงจะเอา filter blur lazy-img ออก ครับ
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // rootMargin: '200px', //ทำให้โหลดเร็วขึ้นก่อนที่จะเลื่อนหน้าจอ
});

imgTargets.forEach(img => imgObserver.observe(img));

//Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // การสร้างกด คีย์บอด ขึ้นลง แล้วเปลี่ยนเฟรม

  //ทำสอบว่าเรากดปุ่มแล้วได้ค่าอะไรออกมา
  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //การทำให้ปุ่มสามารถกดไปหาสไลด์ที่ต้องการได้
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

/////////////////////////////////////////////
/// ------ Lectures -------------------------
/////////////////////////////////////////////

// การทดสอบดูการโหลดของเพจ
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('Full page loaded', e);
});

//การใส่ defer หน้า script แล้วนำไปไว้ข้างบนตรง head จะทำให้โหลดเร็วขึ้น

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

// const randomInt = (min,max) => Math.floor(Math.random()* max - min +1);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// console.log(randomColor());

// //// แล้วค่อยมาใส่ฟังก์ชั่นเมื่อกด link ให้เปลี่ยนสีตามตัวแปร randomColor
// //ถ้าคลิก element ย่อยสุดจะทำให้ parent เปลี่ยนสีตามไปด้วยเสมอ แต่ถ้า คลิกอันพ่อแม่ใหญ่กว่า เด็กๆ จะไม่เปลี่ยนตาม
// document.querySelector('.nav__link').addEventListener('click', function(e){
//  this.style.backgroundColor = randomColor()
//  console.log('LINK', e.target ,e.currentTarget); //เมื่อคลิกแล้วจะหาเป้าหมายว่ากดตรงไหน
//  console.log(e.currentTarget === this);

//  //หยุดการส่งต่อการเกิดเหตุการ์ณ์****----------*****
//  //e.stopPropagation() // โดยทั่วไปไม่ควรหยุดการ propagation
// })

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor()
//   console.log('CONTAINER', e.target ,e.currentTarget);
//   console.log(e.currentTarget === this);
// })

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor()
//   console.log('NAVBAR', e.target,e.currentTarget);
//   console.log(e.currentTarget === this);
// },
// true) //ถ้าใช่ true จะทำให้เมื่อเราคลิก nav จะส่งผลแต่ nav ไม่ผ่านตัวเอื่น ๆเข้าไป

// //Traving DOM
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';

// //Going upwards : parents
// console.log(h1.parentNode);

// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children); //จะได้ h1 h4 buttons และ img ซึ่งมีค่าเท่ากับ ).
// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1 ) el.style.transform = 'scale(0.5)'
// })
