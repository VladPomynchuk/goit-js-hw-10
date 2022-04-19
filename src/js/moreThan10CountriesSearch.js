export function moreThan10CountriesSearch() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  Notify.info('Too many matches found. Please enter a more specific name.');
}
