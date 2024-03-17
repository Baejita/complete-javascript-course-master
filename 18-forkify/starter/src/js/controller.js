import * as model from './model.js'
import recipeView from './views/recipeVeiw.js';
import searchVeiw from './views/searchVeiw.js';
import resultVeiw  from './views/resultVeiw.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import paginationVeiw from './views/paginationVeiw.js';

// if(module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////




const controlRecipes = async function() {
 try {
  // resultVeiw.renderSpinner()

  const id = window.location.hash.slice(1);
  // console.log(id);

  if(!id) return;
     recipeView.renderSpinner(); //นำฟังชั่นมาใส่ตรงนี้เพื่อให้เกิดก่อนการโหลดข้อมูล 

     //0 Update result view to mark selected search results
     resultVeiw.update(model.getSearchResultsPage());


  //1. Loading recipe
    await model.loadRecipe(id)
    
 
//2. rendering recipe
recipeView.render(model.state.recipe)

// controlServings();

 }catch (err) {
  recipeView.renderError()
 }

}


//----------------finish---controlRecipes---------------------------
const controlSearchResult = async function(){
  try {
    // resultVeiw.renderSpinner();

    // 1) Get searsh query
    const query = searchVeiw.getQuery();
    if(!query) return;
    

    // 2) Load search results
    await model.loadSearchResults(query);


    //3)render results
  //  await model.loadSearchResults('pizza')
    // console.log(model.state.search.results);
    // resultVeiw.render(model.state.search.results);
    // console.log(model.getSearchResultsPage(1));
    resultVeiw.render(model.getSearchResultsPage());

    // 4) Render inital pageination buttons

    paginationVeiw.render(model.state.search)
  }catch(err) {
    console.log(err);
  }
}
// controlSearchResult();

const controlPagination = function(goTopage){
  // 1) render New results
  resultVeiw.render(model.getSearchResultsPage(goTopage));

  // 2) Render New pagination buttons
    paginationVeiw.render(model.state.search)
}

const controlServings = function(newServings) {
  // Update the recipe serving (in state)
  model.updateServings(newServings);
  // Update the recipe veiw
  recipeView.update(model.state.recipe)
}

const controlAddBookmark = function(){
  if(!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id)
    // console.log(model.state.recipe);
    recipeView.update(model.state.recipe)
}



const init = function() {
  recipeView.addhandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchVeiw.addHandlerSearch(controlSearchResult);
  paginationVeiw.addHandlerClick(controlPagination);
  
}

init();
