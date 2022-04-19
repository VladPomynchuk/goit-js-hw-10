export function showError() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  console.log('Ловим ошибку');
  Notify.failure('Oops, there is no country with that name');
}
