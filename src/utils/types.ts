export { compareAB, itemObject, toggleObject };

/**
 * Sets type for country alpha-2 code property
 * used with the .sort() method to arrange countries alphabetically in dropdown list
 */
interface compareAB {
  cca2: string;
}

/**
 * Sets types for items in dropdown list.
 * Properties are passed on to createItem() function
 */
interface itemObject {
  name: {
    common: string;
  };
  cca2: string;
  idd: {
    root?: string;
    suffixes?: string | [0];
  };
  flags: {
    svg: string;
  };
  latlng: [];
}

/**
 * Sets types for (renderDropdownToggle & updateDropdownToggle) functions
 */
interface toggleObject {
  image: string;
  name: string;
  alphaCode: string;
  prefix?: string | number;
  suffix?: string | [unknown];
}
