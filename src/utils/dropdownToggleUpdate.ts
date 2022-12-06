import type { toggleObject } from '$utils/types';

import { renderDropdownToggle } from './dropdownToggleRender';
import { getInputValue } from './hiddenInput';

/**
 * Recieves the countryElements and filters them, matching the countryCode value stored in the hidden input field
 * @param countryElements contains all country objects
 * @returns rendered dropdown toggle element with flag, prefix and suffix based on user's location or user's selection
 */
export const updateDropdownToggle = (countryElements: toggleObject[]) => {
  try {
    const countryElement = countryElements.filter((el: toggleObject) => {
      return el.alphaCode === getInputValue();
    });
    return countryElement.forEach((data) => renderDropdownToggle(data));
  } catch (error) {
    return [];
  }
};
