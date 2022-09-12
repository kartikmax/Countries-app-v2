// "https://restcountries.com/v3.1/all"

async function countryData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

let a = countryData();
export let myData = a.then();
