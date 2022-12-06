import '@finsweet/ts-utils';
import { closeDropdown } from '@finsweet/ts-utils';

import { dropdownElement, listElement } from '$utils/config';
import { itemTemplate } from '$utils/countryObjects';
import { updateDropdownToggle } from '$utils/dropdownToggleUpdate';
import { getData } from '$utils/fetchAPI';
import { getGeolocation } from '$utils/geolocation';
import { createItem } from '$utils/renderList';
import type { compareAB } from '$utils/types';

window.Webflow ||= [];
window.Webflow.push(() => {
  (async () => {
    sessionStorage.clear();

    const userGeolocation = await getGeolocation();

    localStorage.userLocation = JSON.stringify(userGeolocation);

    const countryData = await getData();
    countryData.sort((a: compareAB, b: compareAB) => a.cca2.localeCompare(b.cca2));

    const countryElements = countryData.map(function (el) {
      return itemTemplate(el);
    });

    countryElements.forEach((data) => createItem(data));

    updateDropdownToggle(countryElements);

    listElement?.addEventListener('click', () => {
      if (!dropdownElement) return;
      closeDropdown(dropdownElement, true);
      return updateDropdownToggle(countryElements);
    });
  })();
});
