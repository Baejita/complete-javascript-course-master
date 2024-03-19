import icons from '../../img/icons.svg';
import Veiw  from "./Veiw";
import { sayHi } from '../model';
sayHi();
class AddRecipeView extends Veiw{
    _parentElement = document.querySelector('.upload')
    _message = 'Recipe was successfully uploaded :)';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    // _parentElement = document.querySelector('.upload');
    // _message = 'Recipe was successfully uploaded :)';
  
    // _window = document.querySelector('.add-recipe-window');
    // _overlay = document.querySelector('.overlay');
    // _btnOpen = document.querySelector('.nav__btn--add-recipe');
    // _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this.addHandlerShowWindow();
        this.addHandlerHideWindow();
        this.addHandlerUpload();
    }

    toggleWindow(){
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    addHandlerShowWindow () {
        this._btnOpen.addEventListener('click',this.toggleWindow.bind(this));
    }

    addHandlerHideWindow () {
        this._btnClose.addEventListener('click',this.toggleWindow.bind(this));
        this._overlay.addEventListener('click',this.toggleWindow.bind(this));
        this._window.classList.add('hidden');
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
          e.preventDefault();
          const dataArr = [...new FormData(this)];
            const data = Object.fromEntries(dataArr);
          handler(data);
        });
        
      }
    _generateMarkup(){

     
        
    }


}

export default new AddRecipeView ();