import { countries } from "../../data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }
  document.querySelector("#ddlCountries").innerHTML = options;
};
const getCountry = (id) => {
  const arr = countries.filter((country) => country.ccn3 === id);
  if (arr.length > 0) {
    return arr[0];
  } else {
    return null;
  }
};