import type { toggleObject } from '$utils/types';

import { dropdownElement, dropdownToggle, flag, value } from './config';

/**
 * Function called inside dropdownToggle function
 * @param data is pased on from dropdownElement with the filtered countryElements from the REST Country API
 * @returns dropdown element with flag and prefix based on user's location
 */
export const renderDropdownToggle = function (data: toggleObject) {
  try {
    if (!dropdownElement || !dropdownToggle) return;

    if (flag) (flag.src = data.image), (flag.alt = `${data.name} Flag`);
    if (value) value.textContent = `${data.prefix}${data.suffix}`;
    if (value && data.alphaCode === ('AQ' || 'CA' || 'DO' || 'HM' || 'KZ' || 'PR' || 'RU' || 'US'))
      value.textContent = `${data.prefix}`;
    if (value && data.alphaCode === 'EH') value.textContent = '+212';
    if (value && value.textContent === 'undefined') value.textContent = '+ ?';

    return dropdownToggle;
  } catch (error) {
    return [];
  }
};
