import type { itemObject } from '$utils/types';

/**
 * Returns array of objects templates with properties
 * from each country passed from REST Country API
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
