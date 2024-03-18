import icons from '../../img/icons.svg';
import Veiw  from "./Veiw";

class AddRecipeView extends Veiw{
    _parentElement = document.querySelector('.upload')    
    _window = document.querySelect('.add-recipe-window')
    _overlay = document.querySelect('.overlay')
    _btnOpen = document.querySelect('.nav__btn--add-recipe');
    _btnClose = document.querySelect('.btn--close-recipe');

    constructor(){
        super();
        this.addHandlerShowWindow();
    }

    toggleWindow(){
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    addHandlerShowWindow () {
        this._btnOpen.addEventListener('click',this.toggleWindow.bind(this));
    }

    _generateMarkup(){

     
        
    }


}

export default new AddRecipeView ();