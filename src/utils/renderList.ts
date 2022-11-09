import { getInputValue, setInputValue } from '$utils/hiddenInput';

import { dropdownElement, listElement, listItem, phoneForm } from './config';

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

    const newItem = listItem.cloneNode(true) as HTMLDivElement;

    const flag = newItem.querySelector<HTMLImageElement>('[data-element="flag"]');
    const value = newItem.querySelector<HTMLDivElement>('[data-element="value"]');

    if (flag) flag.src = data.image;
    if (flag) flag.alt = `${data.name} Flag`;
    if (value) value.textContent = data.alphaCode;

    listElement?.appendChild(newItem);

    setInputValue(data, newItem);

    const defaultSelected = (newItem: HTMLDivElement) => {
      if (newItem.textContent === getInputValue()) {
        newItem.classList.add('w--current');
        newItem.ariaSelected = 'true';
        newItem.scrollIntoView();
        newItem.focus();
      }
    };

    defaultSelected(newItem);

    listElement?.addEventListener('click', () => {
      newItem.ariaSelected = 'false';
      newItem.classList.remove('w--current');
      if (newItem.textContent === getInputValue()) {
        newItem.classList.add('w--current');
        newItem.ariaSelected = 'true';
      }

      if (newItem.ariaSelected === 'true') {
        newItem.scrollIntoView();
        // newItem.focus();
      }
    });

    if (!dropdownElement || !phoneForm) return;
    const dropdownToggle = dropdownElement.querySelector<HTMLDivElement>(`#w-dropdown-toggle-0`);
    if (!dropdownToggle) return;

    dropdownToggle.addEventListener('click', () => {
      console.log('DROPDOWN CLICK');
      if (dropdownToggle.ariaExpanded === 'false') {
        dropdownToggle.blur();
      }
      if (newItem.ariaSelected === 'true') {
        newItem.scrollIntoView();
        newItem.focus();
      }
    });

    return newItem;
  } catch (error) {
    return [];
  }
};
