import { setInputValue } from '$utils/hiddenInput';

import { listElement, listItem } from './config';

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

    return newItem;
  } catch (error) {
    return [];
  }
};
