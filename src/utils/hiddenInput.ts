import { getLocalStorage, getSessionStorage } from '$utils/localStorage';

import { inputEl } from './config';

/**
 *
 * @param data recieves alpha-2 code values of dropdown list items
 * @param newItem -- to listen to for click function and add alpha-2 value to session storage and hidden input element
 * @returns
 */
export const setInputValue = function (data: { alphaCode: unknown }, newItem: HTMLDivElement) {
  try {
    if (!inputEl) return;

    inputEl.setAttribute('value', getLocalStorage());

    newItem.addEventListener('click', () => {
      if (!inputEl) return;
      sessionStorage.setItem('userSelectedLocation', JSON.stringify(data.alphaCode));
      inputEl.setAttribute('value', getSessionStorage());
      return;
    });
  } catch (error) {
    return [];
  }
};

/**
 * @returns country alpha-2 code value stored in the hidden countryCode input element
 */
export const getInputValue = () => {
  if (!inputEl) return;

  return inputEl.value;
};
