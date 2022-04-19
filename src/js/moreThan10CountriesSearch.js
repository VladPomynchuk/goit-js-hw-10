import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function moreThan10CountriesSearch(countryList, countryInfo) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  Notify.info('Too many matches found. Please enter a more specific name.');
}
