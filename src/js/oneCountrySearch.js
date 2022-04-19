export function oneCountrySearch([el], countryList, countryInfo) {
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
