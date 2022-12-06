export {
  API_URL,
  TIMEOUT_SEC,
  REVERSE_GEO_URL,
  phoneForm,
  phoneNumber,
  dropdownElement,
  listElement,
  listItem,
  inputElement,
};

// APIs URLs params
const API_URL = 'https://restcountries.com/v3.1/all';
const REVERSE_GEO_URL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7&location=`;

// Timeout seconds
const TIMEOUT_SEC = 9;

// Query selectors
const phoneForm = document.querySelector<HTMLFormElement>(`[data-name='Phone Form']`);
const dropdownElement = document.querySelector<HTMLDivElement>(`[data-element='dropdown']`);
const listElement = document.querySelector<HTMLDivElement>(`[data-element='list']`);
const listItem = document.querySelector<HTMLDivElement>(`[data-element='item']`);
const inputElement = document.querySelector<HTMLInputElement>(`[name='countryCode']`);
const phoneNumber = document.querySelector<HTMLInputElement>(`[data-name='Phone Number']`);
