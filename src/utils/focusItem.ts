import { listItem } from './config';

export const focusItem = function () {
  try {
    if (listItem?.classList.contains('w--current')) listItem?.focus();

    return;
  } catch (error) {
    return [];
  }
};
