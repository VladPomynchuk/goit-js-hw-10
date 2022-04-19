export function moreThan2CountriesSearch(elements, countryList, countryInfo) {
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
