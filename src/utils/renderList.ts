import { getInputValue, setInputValue } from '$utils/hiddenInput';

import { dropdownToggle, listElement, listItem } from './config';

/**
 * Renders item elements inside dropdown list element
 * @param data Recieved from countryElements array
 * @returns Apended list of item elements for each country passed from API
 */
export const createItem = function (data: {
  image: string;
  name: string;
  alphaCode: string | null;
}) {
  try {
    if (!listItem || !listElement) return;

    listItem?.remove();

    const newItem = listItem.cloneNode(true) as HTMLDivElement;

    const flag = newItem.querySelector<HTMLImageElement>('[data-element="flag"]');
    const value = newItem.querySelector<HTMLDivElement>('[data-element="value"]');

    if (flag) flag.src = data.image;
    if (flag) flag.alt = `${data.name} Flag`;
    if (value) value.textContent = data.alphaCode;

    listElement?.appendChild(newItem);

    setInputValue(data, newItem);

    function defaultSelected(newItem: HTMLDivElement) {
      if (newItem.textContent === getInputValue()) {
        newItem.classList.add('w--current');
        newItem.ariaSelected = 'true';
      }
    }

    function updateCurrent() {
      newItem.ariaSelected = 'false';
      newItem.classList.remove('w--current');
      if (newItem.textContent === getInputValue()) {
        newItem.classList.add('w--current');
        newItem.ariaSelected = 'true';
      }
    }

    function focusCurrent() {
      dropdownToggle?.addEventListener('pointerdown', () => {
        if (newItem?.classList.contains('w--current')) newItem.focus();
      });

      defaultSelected(newItem);

      return;
    }

    focusCurrent();
    listElement?.addEventListener('click', updateCurrent);

    return;
  } catch (error) {
    return [];
  }
};
