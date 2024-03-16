import * as model from './model.js'
import recipeView from './views/recipeVeiw.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////




const controlRecipes = async function() {
 try {

  const id = window.location.hash.slice(1);
  console.log(id);

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


const init = function() {
  recipeView.addhandlerRender(controlRecipes);

}

init();
