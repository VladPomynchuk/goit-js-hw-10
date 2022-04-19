import { refs } from './js/refs.js';
const { input, countryList, countryInfo } = refs();
import { fetchCountries } from './js/fetchCountries';
// import { showError } from './js/showError.js';
// import { moreThan10CountriesSearch } from './js/moreThan10CountriesSearch.js';
// import { moreThan2CountriesSearch } from './js/moreThan2CountriesSearch.js';
// import { oneCountrySearch } from './js/oneCountrySearch.js';

import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const searchValue = e.target.value.trim();

  if (searchValue === '') {
    return;
  }

  fetchCountries(searchValue)
    .then(array => {
      if (array.length > 10) {
        return moreThan10CountriesSearch();
      } else if (array.length > 2 && array.length <= 10) {
        moreThan2CountriesSearch(array);
      } else {
        oneCountrySearch(array);
      }
    })
    .catch(showError);
}

// function fetchCountries(name) {
//   const searchParams = new URLSearchParams({
//     fields: 'name,capital,population,flags,languages',
//   });

//   const url = `https://restcountries.com/v3.1/name/${name}?${searchParams}`;
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

function moreThan2CountriesSearch(elements) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  countryList.style.listStyle = 'none';
  countryList.style.padding = '0';
  countryList.style.margin = '0';
  countryList.insertAdjacentHTML(
    'beforeend',
    elements
      .map(e => {
        return `<li align-items='center'>
        <img src="${e.flags.svg}" alt="flag${e.name.official}" width="30px" height="20px" />
        <span style="font-size: 20px;" >${e.name.official}</span>
      </li>`;
      })
      .join(''),
  );
}

function moreThan10CountriesSearch() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  Notify.info('Too many matches found. Please enter a more specific name.');
}

function oneCountrySearch([el]) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  const oneCountry = `<li style="list-style: none">
  <img src="${el.flags.svg}" alt="${el.name.official}" width="45px" height="30px" />
  <h3 style="display: inline; font-size: 40px">${el.name.official}</h3>
  <p><b>Capital: </b>${el.capital}</p>
  <p><b>Population: </b>${el.population}</p>
  <p><b>Languages: </b>${Object.values(el.languages)}</p>
</li>
`;
  countryInfo.insertAdjacentHTML('afterbegin', oneCountry);
}

function showError() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  Notify.failure('Oops, there is no country with that name');
}
