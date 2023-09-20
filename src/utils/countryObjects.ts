import type { itemObject } from '$utils/types';

/**
 * Returns an item with it's properties
 * for each country from the REST Country API
 * inside the dropdown list
 */
export const itemTemplate = (itemObject: itemObject) => {
  return {
    name: itemObject.name.common,
    alphaCode: itemObject.cca2,
    prefix: itemObject.idd.root,
    suffix: itemObject.idd.suffixes,
    image: itemObject.flags.svg,
    latlng: itemObject.latlng,
  };
};
