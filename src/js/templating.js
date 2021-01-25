import advices from './advices';
import refs from './refs';
import countriesList from '../template/countries-list.hbs';
import countryCard from '../template/country-card.hbs';

function updateMarkup(array) {
  if (array === undefined) {
    return;
  }
  if (array.length > 10) {
    refs.country.innerHTML = '';
    advices.onSpecifyRequest();
  } else if (array.length > 1 && array.length < 11) {
    refs.country.innerHTML = '';
    const countriesListTemplate = countriesList(array);
    refs.country.insertAdjacentHTML('beforeend', countriesListTemplate);
  } else if (array.length === 1) {
    refs.country.innerHTML = '';
    const countryInfoTemplate = countryCard(array);
    refs.country.insertAdjacentHTML('beforeend', countryInfoTemplate);
  } else {
    advices.onNotFound();
  }
}

export default updateMarkup;
