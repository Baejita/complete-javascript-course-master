import Veiw  from "./Veiw";
import icons from '../../img/icons.svg';
import previewView from './preveiwVeiw';


class BookmarksVeiw extends Veiw{
    _parentElement = document.querySelector('.bookmarks__list')
    _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
    _message = '';

    addHanderRender (handler) {
      window.addEventListener('load', handler);
    }

_generateMarkup() {
  // console.log(this._data); // logs the data passed to the view
  return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
}
}

export default new BookmarksVeiw();