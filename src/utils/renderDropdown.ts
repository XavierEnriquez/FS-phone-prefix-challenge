import type { toggleObject } from '$utils/types';

import { dropdownElement } from './config';

/**
 * Function called inside dropdownToggle function
 * @param data is pased on from dropdownElement with the filtered countryElements from the REST Country API
 * @returns dropdown element with flag and prefix based on user's location
 */
export function renderDropdownToggle(data: toggleObject) {
  try {
    if (!dropdownElement) return;
    const dropdownToggle = dropdownElement.querySelector<HTMLDivElement>(`#w-dropdown-toggle-0`);

    if (!dropdownToggle) return;

    // Query selectors for prefix-dropdown="item" elements
    const flag = dropdownToggle.querySelector<HTMLImageElement>('[data-element="flag"]');
    const value = dropdownToggle.querySelector<HTMLDivElement>('[data-element="value"]');

    // const valueAlphaCode = value && data.alphaCode;

    if (flag) flag.src = data.image;
    if (flag) flag.alt = `${data.name} Flag`;
    if (value) value.textContent = `${data.prefix}${data.suffix}`;
    if (
      (value && data.alphaCode === 'AQ') ||
      (value && data.alphaCode === 'CA') ||
      (value && data.alphaCode === 'DO') ||
      (value && data.alphaCode === 'HM') ||
      (value && data.alphaCode === 'KZ') ||
      (value && data.alphaCode === 'PR') ||
      (value && data.alphaCode === 'RU') ||
      (value && data.alphaCode === 'US')
    )
      value.textContent = `${data.prefix}`;
    if (value && data.alphaCode === 'EH') value.textContent = '+212';
    if (value && value.textContent === 'undefined') value.textContent = '+ ?';

    return dropdownToggle;
  } catch (error) {
    return [];
  }
}
