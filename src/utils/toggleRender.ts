import type { toggleObject } from '$utils/types';

import { dropdownEl, toggleEl, flag, value } from './config';

/**
 * Function called inside dropdownToggle function
 * @param data is pased on from dropdownEl with the filtered countryElements from the REST Country API
 * @returns dropdown element with flag and prefix based on user's location
 */
export function toggleRender(data: toggleObject) {
  try {
    if (!dropdownEl || !toggleEl) return;

    if (flag) (flag.src = data.image), (flag.alt = `${data.name} Flag`);
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

    return toggleEl;
  } catch (error) {
    return [];
  }
}
