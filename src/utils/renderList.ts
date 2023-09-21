import { getInputValue, setInputValue } from '$utils/hiddenInput';

import { listEl, itemEl, toggleEl } from './config';

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
    if (!itemEl || !listEl) return;

    itemEl?.remove();

    const newItem = itemEl.cloneNode(true) as HTMLDivElement;
    const flag = newItem.querySelector<HTMLImageElement>('[data-element="flag"]');
    const value = newItem.querySelector<HTMLDivElement>('[data-element="value"]');

    if (flag) (flag.src = data.image), (flag.alt = `${data.name} Flag`);
    if (value) value.textContent = data.alphaCode;

    listEl?.appendChild(newItem);

    setInputValue(data, newItem);

    function defaultSelected(newItem: HTMLDivElement) {
      if (newItem.textContent === getInputValue()) {
        newItem.classList.add('w--current');
        newItem.ariaSelected = 'true';
        newItem.focus();
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
      toggleEl?.addEventListener('pointerdown', () => {
        if (newItem?.classList.contains('w--current')) newItem.focus();
      });

      defaultSelected(newItem);

      return;
    }

    focusCurrent();
    listEl?.addEventListener('click', updateCurrent);

    return;
  } catch (error) {
    return [];
  }
};
