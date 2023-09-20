import '@finsweet/ts-utils';
import { closeDropdown } from '@finsweet/ts-utils';

import { dropdownElement, dropdownToggle, listElement } from '$utils/config';
import { itemTemplate } from '$utils/countryObjects';
import { fetchApi } from '$utils/fetchAPI';
import { getGeolocation } from '$utils/geolocation';
import { createItem } from '$utils/renderList';
import type { compareAB } from '$utils/types';
import { updateDropdown } from '$utils/updateDropedown';

window.Webflow ||= [];
window.Webflow.push(() => {
  (async () => {
    // sessionStorage.clear();

    const userGeolocation = await getGeolocation();

    localStorage.userLocation = JSON.stringify(userGeolocation);

    const countryData = await fetchApi();
    countryData.sort((a: compareAB, b: compareAB) => a.cca2.localeCompare(b.cca2));

    const countryElements = countryData.map(function (el) {
      return itemTemplate(el);
    });

    countryElements.forEach((data) => createItem(data));

    updateDropdown(countryElements);

    function updateDropdowntoggle() {
      if (!dropdownElement) return;
      updateDropdown(countryElements);
      closeDropdown(dropdownElement, true);
      dropdownToggle?.focus();
      return;
    }

    listElement?.addEventListener('click', updateDropdowntoggle);
  })();
});
