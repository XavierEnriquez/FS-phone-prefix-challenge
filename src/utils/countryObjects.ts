import type { itemObject } from '$utils/types';

/**
 * Returns a dropdown list item with properties
 * from each country passed from the REST Country API
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
