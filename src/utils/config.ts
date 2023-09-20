export {
  API_URL,
  TIMEOUT_SEC,
  GEO_URL,
  phoneForm,
  phoneNum,
  dropdownEl,
  toggleEl,
  listEl,
  itemEl,
  inputEl,
  flag,
  value,
};

// APIs URLs params
const API_URL = 'https://restcountries.com/v3.1/all';
const GEO_URL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7&location=`;

// Timeout seconds
const TIMEOUT_SEC = 9;

// Query selectors
const phoneForm = document.querySelector<HTMLFormElement>(`[data-name='Phone Form']`);
const dropdownEl = document.querySelector<HTMLDivElement>(`[data-element='dropdown']`);
const toggleEl = document.querySelector<HTMLDivElement>(`[data-element='dropdownToggle']`);
const listEl = document.querySelector<HTMLDivElement>(`[data-element='list']`);
const itemEl = document.querySelector<HTMLAnchorElement>(`[data-element='item']`);
const inputEl = document.querySelector<HTMLInputElement>(`[name='countryCode']`);
const phoneNum = document.querySelector<HTMLInputElement>(`[data-name='Phone Number']`);
const flag = document.querySelector<HTMLImageElement>('[data-element="flag"]');
const value = document.querySelector<HTMLDivElement>('[data-element="value"]');
