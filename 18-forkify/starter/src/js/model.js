import {async} from 'regenerator-runtime';
import { API_URL, RESULT_PER_PAGE, KEY} from './config.js';
import { AJAX} from './views/helpers.js';


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

const createRecipeObject = function(data){
    const  {recipe} = data.data;
        return {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
            ...(recipe.key && {key: recipe.key}),
            //วิธีเพิ่ม object ใหม่ แบบดีสุด ๆ
        }
}

export const loadRecipe = async function(id) {
    try{
        const data = await  AJAX(`${API_URL}/${id}?key=${KEY}`);
        
        state.recipe = createRecipeObject(data);
        // console.log(res, data);
        
        //สร้างต้นแบบการดึงข้อมูลออกมา 
        
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
        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
        console.log(data);
        
        state.search.results= data.data.recipes.map( rec => {
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image_url,
                publisher: rec.publisher,
                ...(rec.key && {key: rec.key}),
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

const persistBookmarks =function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookMark = function (recipe) {
    //Add bookmarks
    state.bookmarks.push(recipe);

    // mark current recipe as bookmark
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    console.log(state.bookmarks);

    persistBookmarks()
}

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(el => el.id === id);
    // console.log(index);
    state.bookmarks.splice(index, 1);

    if(id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks()
}

const init = function () {
   const storage = localStorage.getItem('bookmarks');
   if(storage) state.bookmarks = JSON.parse(storage);
}

init ();
console.log(state.bookmarks);

const clearBookmarks = function () {
    localStorage.clear('bookmarks');
}
// clearBookmarks ();

export const uploadRecipe = async function(newRecipe) { 
    try {
        console.log(Object.entries(newRecipe));
        const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
        .map(ing => {
            const ingArr = ing[1].split(',').map(el => el.trim())
            // const ingArr = ing[1].replaceAll(' ', '').split(',');
            if(ingArr.length !==3) throw new Error('WrongIngredient Format Please use the correct format:D')
    
    
            const [quantity, unit, description] = ingArr;
            return {quantity: quantity ? +quantity: null, unit, description};
        });
        
        const recipe= {
            title: newRecipe.title,
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: newRecipe.servings,
            cooking_time: newRecipe.cookingTime,
            ingredients: ingredients
        }
        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe)
        state.recipe = createRecipeObject(data);

        addBookMark(state.recipe)

    }catch (err) {
        throw err;
    }
   
}

export const sayHi = function(){
    console.log('Sayhi');
}

