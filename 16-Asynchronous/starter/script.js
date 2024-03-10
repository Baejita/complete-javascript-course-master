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
  countriesContainer.style.opacity = 1;
}

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg)
  countriesContainer.style.opacity = 1;
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

/*
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
*/

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

// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
/*
const whereAmI = function(lat, lng){
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  .then(res =>{ 
    if(!res.ok) throw new Error(`Problem with geocodeing ${res.status}`);
    return res.json()})

  .then(data => {

    console.log(`You are in ${data.city}, ${data.countryName}`);

   return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`)
  })
  .then((res) => {
            if(!res.ok)
            throw new Error(`Country not found (${res.status})`)
            
            return res.json()
          }
            )
    .then(data => renderCountry(data[0]))

  .catch(err => console.error(`${err.message}`))
  
}

whereAmI(52.508, 13.381)
whereAmI(14, 104)
whereAmI(-33.933, 18.474)

*/

/*
const lottary = new Promise (function(resolve, reject) {
 
  console.log('Lotter draw is happening 💎');
  setTimeout(function(){
    if(Math.random() < 0.5){
      resolve('You win 💰')
    }else{
      reject (new Error('You lost your money'))
    }
  }, 2000)
})

lottary.then(res => console.log(res)).catch(err => console.error(err));

const wait = function(seconds) {
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then (()=> {
    console.log('I waited for 1 seconds');
    return wait(1)
  })
  .then (()=> {
    console.log('I waited for 2 seconds');
    return wait(1)
  })
  .then (()=> {
    console.log('I waited for 3 seconds');
    return wait(1)
  })
  .then(() => console.log('I waited for 4 seconds'))

  Promise.resolve('abc').then(x => console.log(x));
  Promise.reject('abc').catch(x => console.error(x));

  */

 /*

  const getPositoin = function () {
    return new Promise(function (resolve, reject) {
      // navigator.geolocation.getCurrentPosition(
      //   position => resolve(position),
      //   err => reject(err)
      // )
      navigator.geolocation.getCurrentPosition(resolve, reject);
      
    })
  }

  // getPositoin().then(pos => console.log(pos));

  const whereAmI = function(){

    getPositoin().then(pos =>{
      const { latitude : lat, longitude: lng} = pos.coords
   
    return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  })
    .then(res =>{ 
      if(!res.ok) throw new Error(`Problem with geocodeing ${res.status}`);
      return res.json()})
  
    .then(data => {
  
      console.log(`You are in ${data.city}, ${data.countryName}`);
  
     return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`)
    })
    .then((res) => {
              if(!res.ok)
              throw new Error(`Country not found (${res.status})`)
              
              return res.json()
            }
              )
      .then(data => renderCountry(data[0]))
  
    .catch(err => console.error(`${err.message}`))
  }
  
  btn.addEventListener('click', whereAmI);

  */

  /// Challenge 2 Of Asynchous
  /*
  const wait = function(seconds) {
    return new Promise(function(resolve){
      setTimeout(resolve, seconds * 1000);
    });
  };


  const imgContainer = document.querySelector('.images')


  const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', function() {
        imgContainer.append(img);
        resolve(img);
      
      })

      img.addEventListener('error', function(){
        reject(new Error('Image not found'));
      });
    });
  };

  let currentImg;

  createImage('img/img-1.jpg')
    .then(img => {
    currentImg = img;
    console.log('Image 1 Loded')
    return wait(2)
  })
    .then (()=> {
      currentImg.style.display = 'none';
      return createImage('img/img-2.jpg')
  })
    .then(img => {
      currentImg = img;
      console.log('Image 2 Loded')
      return wait(2)
  })
    .then(() => {
    currentImg.style.display = 'none';
  })
    .catch(err => console.error(err));
  
    */
    
    const getPositoin = function () {
      return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //   position => resolve(position),
        //   err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject);
        
      })
    }

     
  const whereAmI = async function(){
    try {//geolocation
    const pos = await getPositoin()
    const { latitude : lat, longitude: lng} = pos.coords
   
    //reverse geocoding
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    const dataGeo = await resGeo.json();
    


    //counstry data //

    //fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));

    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryName}`)

    const data = await res.json();
    
    renderCountry(data[0])
  
      return `You are in ${dataGeo.city} and ${dataGeo.country}.`
  } 
    catch(err) {
      console.log(`${err}`);
      renderError(`🛑 ${err.message}`)

      //Reject promise returned from async function
      throw err;

    }
  }

  /*
  console.log('1: Will get location');
  // const city = whereAmI();
  // console.log(city);
  whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err=> console.log(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'));
  */

  //อีกวิธีโดยการใช้ async และ awiat
console.log('1: Will get location');
(async function(){
  try{
    const city = await whereAmI();
    console.log(`2: ${city}`)
  } catch {
    console.log(`2: ${err.message}`)
  }

  console.log('3: Finished getting location')
  
})();