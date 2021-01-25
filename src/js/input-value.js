import refs from './refs';
import fetchCountries from './fetch-countries';
import updateMarkup from './templating';
const debounce = require('lodash.debounce');

refs.inputRef.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    refs.country.innerHTML = '';
    const inputValue = refs.inputRef.value;
    fetchCountries(inputValue).then(data => updateMarkup(data));
  }, 500),
);
