import { refs } from './js/refs.js';
const { input, countryList, countryInfo } = refs();
import { fetchCountries } from './js/fetchCountries';
import { showError } from './js/showError.js';
import { moreThan10CountriesSearch } from './js/moreThan10CountriesSearch.js';
import { moreThan2CountriesSearch } from './js/moreThan2CountriesSearch.js';
import { oneCountrySearch } from './js/oneCountrySearch.js';

import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const searchValue = e.target.value.trim();

  if (searchValue === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(searchValue)
    .then(array => {
      if (array.length > 10) {
        return moreThan10CountriesSearch(countryList, countryInfo);
      } else if (array.length > 2 && array.length <= 10) {
        moreThan2CountriesSearch(array, countryList, countryInfo);
      } else {
        oneCountrySearch(array, countryList, countryInfo);
      }
    })
    .catch(error => {
      showError(countryList, countryInfo);
    });
}
