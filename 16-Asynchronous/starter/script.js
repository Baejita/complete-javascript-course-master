'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
    </div>

  </article>
  `

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
}

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg)
  // countriesContainer.style.opacity = 1;
}

/*
///////////////////////////////////////
const getCountryData = function(country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
request.send();
console.log(request.responseText);

request.addEventListener('load', function (){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
      </div>

      
      
    </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    
})
}

getCountryData('portugal')
getCountryData('usa')
getCountryData('thai')
*/

/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags[Object.keys(data.flags)[1]]}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
      </div>

    </article>
    `
  
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function(country) {

    //Ajax call country 1
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
request.send();
console.log(request.responseText);

request.addEventListener('load', function (){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    
    
    //Render coutry 1
    renderCountry(data);

    //get neighbours country 2
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    if(!neighbour) return;
    //Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
    request2.send();
 
    request2.addEventListener('load',function(){
        const [data2] = JSON.parse(this.responseText);

       console.log(data2);
       renderCountry(data2, 'neighbour');
    })
    
    
})
}

getCountryAndNeighbour('USA')
*/


//call back hell
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
// request.send();
// console.log(request.responseText);


// const request = fetch('https://restcountries.com/v3.1/name/portugal')
const getJSON = function(url , errorMsg = 'Something went wrong') {
 return fetch(url).then( response => { 
    if(!response.ok)
    throw new Error(`${errorMsg} (${response.status})`)
    return response.json()
  })
}

const getCountryData = function(country){
  //country 1
    getJSON(
      `https://restcountries.com/v3.1/name/${country}
      `, 
      'Country not found' )

        .then(data => {
          renderCountry(data[0]);
  
          const neighbour = data[0].borders[0];
    
          if(!neighbour) throw new Error('No neighbour found!');
  //country 2
          return getJSON(
            `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
            'Country not found'  
          )
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch( err => {
          console.log(`${err} 💣💣💣`)
          renderError(`Something went wrong 💣💣💣 ${err.message}. try again.` )
      }) 
        .finally(() => {
          countriesContainer.style.opacity = 1;
        }) 
  } 
  
  btn.addEventListener('click',function(){
    getCountryData('australia')
  
  })


// const getCountryData = function(country){
// //country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then((response) => {
//         if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)
        
//         return response.json()
//       }
//         )
//       .then(data => {
        
//         renderCountry(data[0]);

//         //const neighbour = data[0].borders[0];
//         const neighbour = 'kskjai'

//         if(!neighbour) return;
// //country 2
//         return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)

//       } )
//       .then(response => {
//         if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)
        
//         return response.json()
//       })
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch( err => {
//         console.log(`${err} 💣💣💣`)
//         renderError(`Something went wrong 💣💣💣 ${err.message} try again.` )
//     }) 
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       }) 
// } 

// btn.addEventListener('click',function(){
//   getCountryData('thai')

// })



