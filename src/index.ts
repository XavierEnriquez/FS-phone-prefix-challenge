import '@finsweet/ts-utils';

import { dropdownElement, listElement, listItem, phoneForm, phoneNumber } from '$utils/config';
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

    if (!dropdownElement || !phoneForm) return;
    const dropdownToggle = dropdownElement.querySelector<HTMLDivElement>(`#w-dropdown-toggle-0`);
    if (!dropdownToggle) return;
    // listItem?.focus();
    dropdownToggle.focus();

    if (dropdownToggle.ariaExpanded === 'false') {
      dropdownToggle.focus();
    }
    if (dropdownToggle.ariaExpanded === 'true') {
      dropdownToggle.blur();
    }

    document.body.addEventListener('click', (e) => {
      console.log('DOCUMENT CLICK');

      if (
        e.target !== phoneNumber &&
        e.target !== dropdownToggle &&
        e.target !== listElement &&
        e.target !== listItem &&
        dropdownToggle.ariaExpanded === 'true'
      ) {
        dropdownToggle.focus();
      }
      if (
        e.target !== phoneNumber &&
        e.target !== dropdownToggle &&
        e.target !== listElement &&
        e.target !== listItem &&
        dropdownToggle.ariaExpanded === 'false'
      ) {
        dropdownToggle.focus();
      }
    });

    // dropdownToggle.addEventListener('click', () => {
    //   console.log('DROPDOWN CLICK');
    //   if (dropdownToggle.ariaExpanded === 'false') {
    //     dropdownToggle.blur();
    //   }
    //   if (listItem?.ariaSelected === 'true') {
    //     listItem.focus();
    //   }
    // });

    listElement?.addEventListener('click', () => {
      return updateDropdownToggle(countryElements);
    });
  })();
});
