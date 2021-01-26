import refs from './refs';
import fetchCountries from './fetch-countries';
import updateMarkup from './templating';
import debounce from 'lodash.debounce';

refs.inputRef.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    refs.country.innerHTML = '';
    const inputValue = refs.inputRef.value;
    if (!inputValue) {
      return;
    }
    fetchCountries(inputValue).then(data => updateMarkup(data));
  }, 500),
);
