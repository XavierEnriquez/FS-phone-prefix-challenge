import { API_URL, TIMEOUT_SEC } from '$utils/config';
import { timeout } from '$utils/timeout';

/**
 * REST Countries API call with timeout function
 * @returns data with country flag image, phone prefixes and ISO 3166-1 alpha-2 codes
 */

export const fetchApi = async () => {
  try {
    const fetchPromise = await fetch(`${API_URL}`);
    const response: [] = await Promise.race([fetchPromise.json(), timeout(TIMEOUT_SEC)]);
    return response;
  } catch (error) {
    return [];
  }
};
