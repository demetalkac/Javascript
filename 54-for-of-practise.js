import { countries } from "../../data/countries.js"; // ../ ile klasorden cikiliyor.

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    console.log(country);
    options += `<option>${country.name.common}(${country.capital})</option>`;
    console.log(country);
     } document.querySelector("#ddlCountries").innerHTML = options;

};
loadCountries();