import icons from '../../img/icons.svg';
import Veiw  from "./Veiw";
import preveiwVeiw from './preveiwVeiw';

class ResultView extends Veiw{
    _parentElement = document.querySelector('.results')
    _errorMessage = `No recipe found for your query! Please try again`;
    _message = '';
    _generateMarkup() {
      // console.log(this._data); // logs the data passed to the view
      return this._data.map(result => preveiwVeiw.render(result, false)).join('')
    }
}

export default new ResultView();