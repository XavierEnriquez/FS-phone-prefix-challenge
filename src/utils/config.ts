export {
  API_URL,
  TIMEOUT_SEC,
  REVERSE_GEO_URL,
  listElement,
  inputElement,
  listItem,
  dropdownToggle,
};

// APIs URLs params
const API_URL = 'https://restcountries.com/v3.1/all';
const REVERSE_GEO_URL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7&location=`;

// Timeout function seconds
const TIMEOUT_SEC = 9;

// Query selectors
const listElement = document.querySelector<HTMLDivElement>(`[data-element='list']`);
const listItem = document.querySelector<HTMLDivElement>(`[data-element='item']`);
const inputElement = document.querySelector<HTMLInputElement>(`[name='countryCode']`);
const dropdownToggle = document.querySelector<HTMLDivElement>(`[data-element='dropdown']`);
