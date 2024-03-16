import * as model from './model.js'
import recipeView from './views/recipeVeiw.js';
import searchVeiw from './views/searchVeiw.js';
import resultVeiw  from './views/resultVeiw.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////




const controlRecipes = async function() {
 try {
  resultVeiw.renderSpinner()

  const id = window.location.hash.slice(1);
  // console.log(id);

  if(!id) return;
     recipeView.renderSpinner(); //นำฟังชั่นมาใส่ตรงนี้เพื่อให้เกิดก่อนการโหลดข้อมูล 

  //1. Loading recipe
    await model.loadRecipe(id)
    
 
//2. rendering recipe
recipeView.render(model.state.recipe)

 }catch (err) {
  recipeView.renderError()
 }
}


//----------------finish---controlRecipes---------------------------
const controlSearchResult = async function(){
  try {
    // 1) Get searsh query
    const query = searchVeiw.getQuery();
    if(!query) return;
    

    // 2) Load search results
    await model.loadSearchResults(query);


    //3)render results
  //  await model.loadSearchResults('pizza')
    console.log(model.state.search.results);
  }catch(err) {
    console.log(err);
  }
}
controlSearchResult();



const init = function() {
  recipeView.addhandlerRender(controlRecipes);
  searchVeiw.addHandlerSearch(controlSearchResult)

}

init();
