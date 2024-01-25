import { countries } from "../../data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }
  document.querySelector("#ddlCountries").innerHTML = options;
  document.querySelector("#area").innerHTML = countries.reduce(
    (totalArea, country) => totalArea + country.area, 0 );
};
const getCountry = (id) => {
  const arr = countries.filter((country) => country.ccn3 === id);
  if (arr.length > 0) {
    return arr[0];
  } else {
    return null;
  }
};

document.querySelector("#ddlCountries").addEventListener("change", (e) => {
  console.log(e.target.value); //nesnenin ccn3 unu verir
  const country = getCountry(e.target.value);
  document.querySelector("#details tr:nth-child(1) td").innerHTML =
    country.capital;
  document.querySelector("#details tr:nth-child(2) td").innerHTML =
    Object.values(country.language).join("-");
  //birden fazla secenek varsa join("-") ile aralarina - isareti koyduk.
  document.querySelector("#details tr:nth-child(3) td").innerHTML =
    country.region;
  document.querySelector("#details tr:nth-child(4) td").innerHTML =
    Object.values(country.currency).map((item) => item.name);
});

loadCountries();
console.log(getCountry("124"));