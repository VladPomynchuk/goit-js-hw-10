import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function showError(countryList, countryInfo) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  Notify.failure('Oops, there is no country with that name');
  console.log('Срабатывает catch');
}
