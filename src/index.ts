import '@finsweet/ts-utils';

import { listElement } from '$utils/config';
import { itemTemplate } from '$utils/countryObjects';
import { updateDropdownToggle } from '$utils/dropdownToggle';
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

    if (!listElement) {
      return;
    }

    listElement.addEventListener('click', () => {
      return updateDropdownToggle(countryElements);
    });
  })();
});
