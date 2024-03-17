import {async} from 'regenerator-runtime';
import { API_URL, RESULT_PER_PAGE } from './config.js';
import { getJSON } from './views/helpers.js';


export const state = {
    recipe: {},
    search:{
        query: '',
        results: [],
        page:1,
        resultsPerPage: RESULT_PER_PAGE,
    },
    bookmarks : [],
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
        if(state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
        

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
        state.search.page = 1;
        // console.log(state.search.results);
    }catch(err) {
        console.error(`${err}`);
        throw err;
    }
}


    export const getSearchResultsPage = function (page = state.search.page) {
     state.search.page = page;   


    const start = (page - 1) * state.search.resultsPerPage; //0
    const end = page * state.search.resultsPerPage; //9
    return state.search.results.slice(start, end);
}

export const updateServings = function (newServings) {
    //เข้าถึงส่วนผสมและแปลงสัดส่วน
        state.recipe.ingredients.forEach(ing  => {
            ing.quantity = ing.quantity * newServings /state.recipe.servings;
            // .newQt = oldQt * newServing / oldServing 

        });
        //update ผลลัพธ์ใหม่เข้าไปแทนตัวเดิม
        state.recipe.servings = newServings;
}



export const addBookMark = function (recipe) {
    //Add bookmarks
    state.bookmarks.push(recipe);

    // mark current recipe as bookmark
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    console.log(state.bookmarks);
}

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(el => el.id === id);
    // console.log(index);
    state.bookmarks.splice(index, 1);

    if(id === state.recipe.id) state.recipe.bookmarked = false;
}
deleteBookmark()