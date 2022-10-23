import type { toggleObject } from '$utils/types';

import { dropdownToggle } from './config';
import { getInputValue } from './hiddenInput';

/**
 * Function called inside dropdownToggle function
 * @param data is past on from dropdownElement with the filtered countryElements from the REST Country API
 * @returns dropdown element with flag and prefix based on user's location
 */
const renderDropdownToggle = function (data: toggleObject) {
  try {
    if (!dropdownToggle) return;

    const dropdownElement = dropdownToggle.querySelector<HTMLDivElement>(`#w-dropdown-toggle-0`);

    if (!dropdownElement) return;

    // Query prefix-dropdown="item" elements
    const flag = dropdownElement.querySelector<HTMLImageElement>('[data-element="flag"]');
    const value = dropdownElement.querySelector<HTMLDivElement>('[data-element="value"]');

    if (flag) flag.src = data.image;
    if (flag) flag.alt = `${data.name} Flag`;
    if (value && data.alphaCode !== 'CA' && value && data.alphaCode !== 'US')
      value.textContent = `${data.prefix}${data.suffix}`;
    if (
      (value && data.alphaCode === 'AQ') ||
      (value && data.alphaCode === 'CA') ||
      (value && data.alphaCode === 'HM') ||
      (value && data.alphaCode === 'KZ') ||
      (value && data.alphaCode === 'PR') ||
      (value && data.alphaCode === 'RU') ||
      (value && data.alphaCode === 'US')
    )
      value.textContent = `${data.prefix}`;
    return dropdownElement;
  } catch (error) {
    return [];
  }
};

/**
 * Recieves the countryElements and filters them acording the hidden countryCode value
 * @param countryElements contains all country objects
 * @returns rendered dropdown toggle element with flag, prefix and suffix based on user's location or user's selection
 */
export const updateDropdownToggle = (countryElements: toggleObject[]) => {
  try {
    const dropdownElement = countryElements.filter((el: toggleObject) => {
      return el.alphaCode === getInputValue();
    });

    return dropdownElement.forEach((data) => renderDropdownToggle(data));
  } catch (error) {
    return [];
  }
};
