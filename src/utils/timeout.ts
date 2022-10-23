/**
 *
 * @param s Takes number of seconds
 * @returns Timeout function for fetch calls
 */
export const timeout = function (s: number) {
  try {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request Timeout after ${s} second`));
      }, s * 1000);
    });
  } catch (error) {
    return [];
  }
};
