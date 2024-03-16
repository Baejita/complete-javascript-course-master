import {async} from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './views/helpers.js';


export const state = {
    recipe: {},
    search:{
        query: '',
        results: [],
    },

};

export const loadRecipe = async function(id) {
    try{
  const data = await  getJSON(`${API_URL}/${id}`);


// console.log(res, data);

//สร้างต้นแบบการดึงข้อมูลออกมา 
const  {recipe} = data.data;
state.recipe = {
  id: recipe.id,
  title: recipe.title,
  publisher: recipe.publisher,
  sourceUrl: recipe.source_url,
  image: recipe.image_url,
  servings: recipe.servings,
  cookingTime: recipe.cooking_time,
  ingredients: recipe.ingredients
}
// console.log(state.recipe);
    }catch(err) {
        console.error(`${err}`);
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try{
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.results= data.data.recipes.map( rec => {
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image_url,
                publisher: rec.publisher,
            }
        })
        // console.log(state.search.results);
    }catch(err) {
        console.error(`${err}`);
        throw err;
    }
}
